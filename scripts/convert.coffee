webfontsGenerator = require 'webfonts-generator'

webfontsGenerator
  files: [
    "svg/application.svg",
    "svg/apps-overview.svg",
    "svg/bell-o.svg",
    "svg/button.svg",
    "svg/calendar.svg",
    "svg/check-circle-o.svg",
    "svg/check-circle-outline.svg",
    "svg/check-circle.svg",
    "svg/checkbox.svg",
    "svg/clock.svg",
    "svg/configuration-center.svg",
    "svg/container.svg",
    "svg/data-analysis.svg",
    "svg/defect-analysis.svg",
    "svg/device.svg",
    "svg/envelop-open.svg",
    "svg/envelop.svg",
    "svg/flow-control-analysis.svg",
    "svg/fork.svg",
    "svg/gauge.svg",
    "svg/incoming-inspection.svg",
    "svg/input.svg",
    "svg/intelligent-report.svg",
    "svg/inventory-management.svg",
    "svg/inventory.svg",
    "svg/measurement-data-analysis.svg",
    "svg/mechanical-analysis.svg",
    "svg/number-input.svg",
    "svg/plus.svg",
    "svg/ppap.svg",
    "svg/problem-analysis.svg",
    "svg/process-events.svg",
    "svg/product-information-management.svg",
    "svg/product-traceability.svg",
    "svg/product.svg",
    "svg/production-management.svg",
    "svg/production-process.svg",
    "svg/purchasing-management.svg",
    "svg/quality-problem-tracking.svg",
    "svg/question-circle.svg",
    "svg/radio.svg",
    "svg/retry.svg",
    "svg/select.svg",
    "svg/shipments-detection.svg",
    "svg/sales-management.svg",
    "svg/switch.svg",
    "svg/text-area.svg",
    "svg/tick.svg",
    "svg/tooling-management.svg",
    "svg/upload.svg",
    "svg/uploadbox.svg",
    "svg/users.svg",
    "svg/warn-circle-outline.svg",
    "svg/wechat-circle.svg",
    "svg/wechat.svg",
    "svg/packing.svg",
    "svg/warehouse-in.svg",
    "svg/warehouse-out.svg",
  ]
  dest: 'src/fonts/'
  cssDest: 'src/fonts/jimo.css'
  html: true
  htmlDest: 'src/fonts/index.html'
  types: ["eot", "woff", "woff2", "ttf", "svg"]
  fontName: 'Jimo'
  templateOptions:
    classPrefix: 'jimo-'
    baseSelector: '.jimo'
, (error) ->
  if error
    console.log('Fail!', error);
  else
    console.log('Done!');
