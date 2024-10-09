import { InnerBlocks, useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// import editor style
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
    const { showExpand } = attributes;

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody
					initialOpen={true}
					title={__('Show/Hide Expand Button', 'sim-accordion')}
				>
                    <ToggleControl
                        label={__('Show Expand', 'sim-accordion')}
                        checked={showExpand}
                        onChange={() => setAttributes({ showExpand: !showExpand })}
                    />
                </PanelBody>
            </InspectorControls>

            <div
                {...useBlockProps({
                    className: `wp-block-sim-group-accordion`,
                })}
            >
                <InnerBlocks
                    allowedBlocks={["sim/accordion"]}
                    template={[["sim/accordion"]]}
                />
            </div>
        </Fragment>
    );
};

export default Edit;
