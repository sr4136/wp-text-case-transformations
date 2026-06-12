import { BlockControls } from "@wordpress/block-editor";
import { Dropdown, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { insert, registerFormatType, remove, slice } from "@wordpress/rich-text";
import toTitleCaps from "./string-prototypes.js";

// Add the function to the String prototype
String.prototype.toTitleCaps = toTitleCaps;

/**
 * Transform the currently selected RichText substring and keep it selected.
 * Uses RichText slice/remove/insert so inline formats (e.g. links) are preserved.
 */
const transformText = (value, onChange, transformType) => {
  // console.log("transformText called");
  // console.log("Current RichText value:", value);
  // console.log("Requested transform:", transformType);

  // Require a valid transform and a non-empty selection range.
  if (
    !transformType ||
    value.start === undefined ||
    value.end === undefined ||
    value.start === value.end
  ) {
    return;
  }

  // Extract the selected rich text value so inline formats (like links) remain intact.
  const selectedValue = slice(value, value.start, value.end);
  let transformedString = selectedValue.text;

  if ("titlecaps" === transformType) {
    transformedString = transformedString.toTitleCaps();
  }
  if ("uppercase" === transformType) {
    transformedString = transformedString.toUpperCase();
  }
  if ("lowercase" === transformType) {
    transformedString = transformedString.toLowerCase();
  }

  // Keep selected formatting metadata while swapping in transformed text.
  const transformedSelectedValue = {
    ...selectedValue,
    text: transformedString,
  };

  // Replace only the selected range in the full RichText value.
  const valueWithoutSelection = remove(value, value.start, value.end);
  const nextValue = insert(
    valueWithoutSelection,
    transformedSelectedValue,
    value.start,
    value.start
  );

  const selectionEnd = value.start + transformedString.length;

  // Push updated value while restoring the transformed range selection.
  onChange({
    ...nextValue,
    start: value.start,
    end: selectionEnd,
    activeFormats: value.activeFormats,
  });
};

/**
 * Toolbar dropdown UI for choosing a text case transformation.
 */
const TextTransformButton = ({ isActive, onChange, value }) => {
  return (
    <BlockControls>
      <ToolbarGroup>
        <Dropdown
          renderToggle={({ isOpen, onToggle }) => (
            <ToolbarButton
              label="Text Transformations"
              icon="star-half"
              onClick={onToggle}
              aria-expanded={isOpen}
            />
          )}
          renderContent={({ onClose }) => (
            <ToolbarGroup>
              {/* Prevent focus steal on mousedown so selection remains available. */}
              <ToolbarButton
                icon="editor-ltr"
                title="Title Caps"
                text="Title Caps"
                onMouseDown={(event) => event.preventDefault()}
                onClick={(_event) => {
                  transformText(value, onChange, "titlecaps");
                  onClose();
                }}
                isActive={isActive}
              />
              <ToolbarButton
                icon="arrow-up-alt"
                title="Uppercase"
                text="Uppercase"
                onMouseDown={(event) => event.preventDefault()}
                onClick={(_event) => {
                  transformText(value, onChange, "uppercase");
                  onClose();
                }}
                isActive={isActive}
              />
              <ToolbarButton
                icon="arrow-down-alt"
                title="Lowercase"
                text="Lowercase"
                onMouseDown={(event) => event.preventDefault()}
                onClick={(_event) => {
                  transformText(value, onChange, "lowercase");
                  onClose();
                }}
                isActive={isActive}
              />
            </ToolbarGroup>
          )}
        />
      </ToolbarGroup>
    </BlockControls>
  );
};

registerFormatType("sr-wp-tct/blank-format", {
  title: "Text Transforms",
  tagName: "sr-wp-tct",
  className: null,
  edit: TextTransformButton,
});
