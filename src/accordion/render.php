<?php
/**
 * Single Accordion
 *
 * @package simalam
 */

/**
 * Render HTML for single accordion
 *
 * @param array $attributes the block attributes.
 * @return string $content the html content for the block.
 */
function sim_render_accordion($attributes, $content) {
    // Use the provided $content instead of parsing the post content
    $innerBlocksContent = $content;

    // Access individual attributes
    $heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
    $headingTag = isset( $attributes['headingTag'] ) ? $attributes['headingTag'] : '';
    $uniqueId = uniqid();
    $iconClass = isset( $attributes['iconClass'] ) ? $attributes['iconClass'] : '';

    ob_start();
    ?>
        <div class="wp-block-sim-accordion">
            <div class="accordion-wrapper">
                <div class="sim__accordion-head">
                    <<?php echo esc_attr( $headingTag ); ?> class="h5">
                        <button type="button" aria-expanded="false" aria-controls="accordion-section-<?php echo esc_attr( $uniqueId ); ?>" class="accordion-toggle" id="accordion_<?php echo esc_attr( $uniqueId ); ?>">
                            <span class="sim__accordion_title">
                                <?php echo esc_html( $heading ); ?>
                            </span>

                            <div class="sim__accordion_icon">
                                <span class="sim__icon dashicons dashicons-plus-alt2"></span>
                            </div>
                        </button>
                    </<?php echo esc_attr( $headingTag ); ?>>
                </div>
                <div id="accordion-section-<?php echo esc_attr( $uniqueId ); ?>" class="sim__accordion-body" role="region"  aria-labelledby="accordion_<?php echo esc_attr( $uniqueId ); ?>">
                    <div class="sim__accordion-padding">
                        <?php echo wp_kses_post( $innerBlocksContent ); ?>
                    </div>
                </div>
            </div>
        </div>
    <?php
    $outputContent = ob_get_contents();
	ob_end_clean();
    return $outputContent;
}
