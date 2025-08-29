import { BlockControls } from "@wordpress/block-editor";
import { Dropdown, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { registerFormatType } from "@wordpress/rich-text";
import toTitleCaps from "./string-prototypes.js";

// Add the function to the String prototype
String.prototype.toTitleCaps = toTitleCaps;

const transformText = (value, event) => {
  //   console.log("RUNS");
  //   console.log(value);
  //   console.log(event);

  // Get the block's ID.
  const selectedBlockClientId = wp.data
    .select("core/block-editor")
    .getSelectedBlockClientId();

  // Get the transform type.
  const transformType = event.target.dataset.srTtt;

  // Extract the substring to be transformed.
  let transformedString = value.text.substring(value.start, value.end);

  if ("titlecaps" === transformType) {
    transformedString = transformedString.toTitleCaps();
  }
  if ("uppercase" === transformType) {
    transformedString = transformedString.toUpperCase();
  }
  if ("lowercase" === transformType) {
    transformedString = transformedString.toLowerCase();
  }

  // Construct the new text with the transformed substring.
  const newText =
    value.text.substring(0, value.start) +
    transformedString +
    value.text.substring(value.end);

  // Run the update.
  wp.data
    .dispatch("core/block-editor")
    .updateBlockAttributes(selectedBlockClientId, {
      content: newText,
    });
};

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
          renderContent={() => (
            <ToolbarGroup>
              <ToolbarButton
                icon="editor-ltr"
                data-sr-ttt="titlecaps"
                title="Title Caps"
                text="Title Caps"
                onClick={(event) => transformText(value, event)}
                isActive={isActive}
              />
              <ToolbarButton
                icon="arrow-up-alt"
                data-sr-ttt="uppercase"
                title="Uppercase"
                text="Uppercase"
                onClick={(event) => transformText(value, event)}
                isActive={isActive}
              />
              <ToolbarButton
                icon="arrow-down-alt"
                data-sr-ttt="lowercase"
                title="Lowercase"
                text="Lowercase"
                onClick={(event) => transformText(value, event)}
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
