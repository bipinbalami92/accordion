document.addEventListener('DOMContentLoaded', function () {
    function toggleAccordion(accordion, expand) {
        const icon = accordion.querySelector(".sim__icon.dashicons");
        const accToggle = accordion.querySelector(".accordion-toggle");
        const accBody = accordion.querySelector(".sim__accordion-body");

        accordion.classList.toggle('accordion-open', expand);

        if (icon) {
            icon.classList.toggle("dashicons-minus", expand);
            icon.classList.toggle("dashicons-plus-alt2", !expand);
        }

        accToggle.setAttribute("aria-expanded", expand.toString());
        accBody.style.maxHeight = expand ? `${accBody.scrollHeight}px` : '0';
    }

    function updateExpandAllText(parentGroupAccordion) {
        const allAccordions = Array.from(parentGroupAccordion.querySelectorAll(".accordion-wrapper"));
        const allAccordionsClosed = allAccordions.every(acc => !acc.classList.contains('accordion-open'));
        const allAccordionsOpen = allAccordions.every(acc => acc.classList.contains('accordion-open'));
    
        const expandAllButton = parentGroupAccordion.querySelector(".sim-expand-all-button");

        if ( null == expandAllButton ) {
            return;
        }
    
        if (allAccordionsClosed || allAccordionsOpen) {
            const expandAllText = expandAllButton.getAttribute('expand-all-text');
            const collapseAllText = expandAllButton.getAttribute('collapse-all-text');
    
            expandAllButton.textContent = allAccordionsClosed ? expandAllText : collapseAllText;
            const expandBtnAttr = allAccordionsOpen ? true : false;
            expandAllButton.setAttribute("aria-expanded", expandBtnAttr.toString());
        }
    }

    document.querySelectorAll('.wp-block-sim-accordion .accordion-toggle').forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            const parentSingleAccordion = this.closest(".accordion-wrapper");
            toggleAccordion(parentSingleAccordion, this.getAttribute("aria-expanded") !== "true");

            // Update "Expand All" text after manual accordion toggle
            const parentGroupAccordion = parentSingleAccordion.closest(".wp-block-sim-group-accordion");
            updateExpandAllText(parentGroupAccordion);
        });
    });

    const groupAccordionsExpandAll = document.querySelectorAll(".wp-block-sim-group-accordion .sim-expand-all-button");

    groupAccordionsExpandAll.forEach((button) => {
        button.addEventListener("click", function () {
            const parentGroupAccordion = this.closest(".wp-block-sim-group-accordion");

            if (parentGroupAccordion) {
                const expandText = this.getAttribute('expand-all-text');
                const accordions = parentGroupAccordion.querySelectorAll(".accordion-wrapper");

                accordions.forEach((accordion) => {
                    toggleAccordion(accordion, this.textContent === expandText);
                });

                // Update "Expand All" text after all accordions are toggled
                updateExpandAllText(parentGroupAccordion);
            }
        });
    });
});
