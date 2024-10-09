<?php
/**
 * Plugin Name:       Accordion
 * Description:       Simple accordion plugin using React blocks.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.0.3
 * Author:            BipSim
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sim-accordion
 *
 * @package           create-block
 */
defined( 'ABSPATH' ) || exit;

function sim_enqueue_accordion() {
	if ( ! is_admin() ) {
		wp_enqueue_style( 'dashicons' );

		wp_enqueue_script(
			'sim-accordion-js',
			plugin_dir_url(__FILE__) . 'assets/js/accordion.js',
			array(),
			'0.0.1',
			true
		);
	}
}
add_action( 'enqueue_block_assets', 'sim_enqueue_accordion' );

// render function file for blocks
require_once 'src/accordion/render.php';
require_once 'src/group-accordion/render.php';

// register blocks
function sim_register_my_block() {
    register_block_type(
		__DIR__ . '/build/accordion',
		array(
			'render_callback' => 'sim_render_accordion',
		)
	);

	register_block_type(
		__DIR__ . '/build/group-accordion',
		array(
			'render_callback' => 'sim_render_group_accordion',
		)
	);
}
add_action('init', 'sim_register_my_block');
