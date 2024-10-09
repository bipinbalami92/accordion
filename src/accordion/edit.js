import {
    RichText,
    useBlockProps,
    InnerBlocks,
    InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import "./editor.scss";
import tags from "./tags";

const Edit = ({ attributes, setAttributes }) => {
    const { heading, headingTag } = attributes;

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody
                    initialOpen={true}
                    title={__("Accordion Settings", "sim-accordion")}
                >
                    <SelectControl
                        label={__("Select Heading Tag", "sim-accordion")}
                        options={tags}
                        onChange={(headingTag) => setAttributes({ headingTag })}
                        value={headingTag}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                {...useBlockProps({
                    className: `wp-block-sim-single-accordion`,
                })}
            >
                <div className="accordion-wrapper">
                    <div className="sim__accordion-head">
                        <RichText
                            tagName={headingTag}
                            placeholder={heading}
                            value={heading}
                            className="h5"
                            onChange={(heading) => setAttributes({ heading })}
                            aria-expanded="true"
                        />
                        <div className="sim__accordion_icon">
                            <span className="sim__icon dashicons dashicons-plus-alt2"></span>
                        </div>
                    </div>
                    <div className="sim__accordion-body">
                        <InnerBlocks
                            allowedBlocks={["core/paragraph", "core/list", , "core/heading"]}
                            template={[
                                [
                                    "core/paragraph",
                                    {
                                        placeholder:
                                            "Write your content or add any block here...",
                                    },
                                ],
                            ]}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Edit;
