import React from 'react';

const Field = props=>{
  return (
    <div class="admin__field"
      visible="visible"
      css="$data.additionalClasses"
      attr="'data-index': index">
      <label class="admin__field-label" if="$data.label" visible="$data.labelVisible" attr="for: uid">
        <span translate="label" attr="'data-config-scope': $data.scopeLabel" />
      </label>
      <div class="admin__field-control"
        css="'_with-tooltip': $data.tooltip, '_with-reset': $data.showFallbackReset && $data.isDifferedFromDefault">
        <render args="elementTmpl" ifnot="hasAddons()" />

        <div class="admin__control-addon" if="hasAddons()">
          <render args="elementTmpl" />

          <label class="admin__addon-prefix" if="$data.addbefore" attr="for: uid">
            <span text="addbefore" />
          </label>
          <label class="admin__addon-suffix" if="$data.addafter" attr="for: uid">
            <span text="addafter" />
          </label>
        </div>

        <render args="tooltipTpl" if="$data.tooltip" />

        <render args="fallbackResetTpl" if="$data.showFallbackReset && $data.isDifferedFromDefault" />

        <label class="admin__field-error" if="error" attr="for: uid" text="error" />

        <div class="admin__field-note" if="$data.notice" attr="id: noticeId">
          <span translate="notice" />
        </div>

        <div class="admin__additional-info" if="$data.additionalInfo" html="$data.additionalInfo"></div>

        <render args="$data.service.template" if="$data.hasService()" />
      </div>
    </div>
  )
}