import React from "react";
import PropTypes from 'prop-types';

class ColumnsControls extends React.Component
{
  render(){
    return (
      <div class="admin__action-dropdown-wrap admin__data-grid-action-columns" collapsible>
        <button class="admin__action-dropdown" type="button" toggleCollapsible>
          <span class="admin__action-dropdown-text">Columns</span>
        </button>
        <div class="admin__action-dropdown-menu admin__data-grid-action-columns-menu" css="_overflow: hasOverflow()">
          <div class="admin__action-dropdown-menu-header" text="getHeaderMessage()" />
          <div class="admin__action-dropdown-menu-content">
            <div class="admin__field-option" repeat="foreach: elems, item: '$col'">
              <input class="admin__control-checkbox" type="checkbox"
                disable="isDisabled($col())"
                ko-checked="$col().visible"
                attr="id: ++ko.uid" />
              <label class="admin__field-label"
                translate="$col().label"
                attr="for: ko.uid, title: $col().label" />
            </div>
          </div>
          <div class="admin__action-dropdown-menu-footer">
            <div class="admin__action-dropdown-footer-secondary-actions">
              <button class="action-tertiary" type="button" click="reset" translate="'Reset'" />
            </div>
            <div class="admin__action-dropdown-footer-main-actions">
              <button class="action-tertiary" type="button" click="cancel" translate="'Cancel'" closeCollapsible />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColumnsControls;