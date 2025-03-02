import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";

const icon = (
    <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1">
        <path
            d="M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z"
            fill="#77b5f7"
        />
    </svg>
);

/**
 * Block Registration
 */

registerBlockType(metadata, {
    icon: {
        src: icon,
        foreground: "#77b5f7",
    },
    edit: Edit,
    save: Save,
});
