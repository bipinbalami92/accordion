<?php
/**
 * Group Accordion
 *
 */

/**
 * Render HTML for group accordion
 *
 * @param array $attributes the block attributes.
 * @return string $content the html content for the block.
 */
function sim_render_group_accordion($attributes, $content) {
    ob_start();
    ?>
        <div class="wp-block-sim-group-accordion">
            <div class="group-accordion-wrapper">
                <div class="expand-button-wrapper">
                    <button class="sim-expand-all-button" aria-expanded="false" expand-all-text="<?php echo esc_html__( 'Expand All', 'sim-accordion' ); ?>" collapse-all-text="<?php echo esc_html__( 'Collapse All', 'sim-accordion' ); ?>"><?php echo esc_html__( 'Expand All', 'sim-accordion' ); ?></button>
                </div>
                <?php echo $content; ?>
            </div>
        </div>
    <?php
    $outputContent = ob_get_contents();
	ob_end_clean();
    return $outputContent;
}
