<?php

/**
 * Plugin Name: WP Text Case Transformations
 * Description: Adds a Gutenberg toolbar button that transforms the case selected text.
 * Version: 0.1.0
 * Author: Steve Rudolfi
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue the block‑editor script.
 */
function sr_wp_tct_assets() {
	wp_enqueue_script(
		'sr-text-case-transformations',
		plugins_url('build/index.js', __FILE__),
		array(
			'wp-blocks',
			'wp-dom',
			'wp-element',
			'wp-i18n',
			'wp-data',
			'wp-compose',
			'wp-rich-text',
			'wp-editor',
			'wp-plugins',
			'wp-components',
			'wp-hooks',
		),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
		true
	);
}
add_action('enqueue_block_editor_assets', 'sr_wp_tct_assets');
