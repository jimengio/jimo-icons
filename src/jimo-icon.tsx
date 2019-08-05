import * as React from "react";
import { Component, CSSProperties } from "react";
import { cx } from "emotion";

import "./fonts/jimo.css";

export type IconType = "lg" | "2x" | "3x" | "4x" | "5x";

export interface IconProps {
  name: EJimoIcon;
  className?: string;
  style?: CSSProperties;
  onClick?: (event) => void;
  onMouseEnter?: (event) => void;
}

export default class JimoIcon extends Component<IconProps, any> {
  render() {
    const { name, className, style, onClick } = this.props;
    let iconPrefix = "jimo";
    let classNames = iconPrefix;

    classNames += ` ${iconPrefix}-${name}`;

    classNames = className ? cx(classNames, className) : classNames;

    return <i style={style} className={classNames} aria-hidden="true" onMouseEnter={this.props.onMouseEnter} onClick={onClick} />;
  }
}

export enum EJimoIcon {
  // icons list
  application = "application",
  appsOverview = "apps-overview",
  bellOutline = "bell-outline",
  button = "button",
  calendar = "calendar",
  checkbox = "checkbox",
  checkCircle = "check-circle",
  checkCircleO = "check-circle-o",
  checkCircleOutline = "check-circle-outline",
  checkInfo = "check-info",
  clock = "clock",
  configurationCenter = "configuration-center",
  container = "container",
  dataAnalysis = "data-analysis",
  defectAnalysis = "defect-analysis",
  device = "device",
  download = "download",
  emptyData = "empty-data",
  envelope = "envelope",
  envelopeOpen = "envelope-open",
  flowControlAnalysis = "flow-control-analysis",
  fork = "fork",
  fullscreen = "fullscreen",
  gauge = "gauge",
  incomingInspection = "incoming-inspection",
  input = "input",
  inspection = "inspection",
  intelligentReport = "intelligent-report",
  inventory = "inventory",
  inventoryManagement = "inventory-management",
  loading = "loading",
  measurementDataAnalysis = "measurement-data-analysis",
  mechanicalAnalysis = "mechanical-analysis",
  mobile = "mobile",
  numberInput = "number-input",
  packing = "packing",
  plus = "plus",
  ppap = "ppap",
  problemAnalysis = "problem-analysis",
  processEvents = "process-events",
  product = "product",
  productInformationManagement = "product-information-management",
  productionManagement = "production-management",
  productionProcess = "production-process",
  productTraceability = "product-traceability",
  purchasingManagement = "purchasing-management",
  qualityProblemTracking = "quality-problem-tracking",
  questionCircle = "question-circle",
  radio = "radio",
  requirements = "requirements",
  retry = "retry",
  salesManagement = "sales-management",
  select = "select",
  serialNumber = "serial-number",
  shanghaiElectric = "shanghai-electric",
  shipmentsDetection = "shipments-detection",
  slimCross = "slim-cross",
  switch = "switch",
  tableHorizontal = "table-horizontal",
  tableVertical = "table-vertical",
  textArea = "text-area",
  tick = "tick",
  toolingManagement = "tooling-management",
  upload = "upload",
  uploadBox = "upload-box",
  users = "users",
  warehouseIn = "warehouse-in",
  warehouseOut = "warehouse-out",
  warnCircleOutline = "warn-circle-outline",
  wechat = "wechat",
  wechatCircle = "wechat-circle",
  zoomIn = "zoom-in",
  zoomOut = "zoom-out",
  ipc = "ipc",
  scan = "scan",
  tickEmbossed = "tick-embossed",
  crossEmbossed = "cross-embossed",
  infoEmbossed = "info-embossed",
  questionCircleOutline = "question-circle-outline",
  ellipsisHorizontal = "ellipsis-horizontal",
  bgWarehouseIn = "bg-warehouse-in",
  bgWarehouseOut = "bg-warehouse-out",
  bgWarehouseTransfer = "bg-warehouse-transfer",
  bgWarehouseCheck = "bg-warehouse-check",
  worker = "worker",
  switchCircle = "switch-circle",
  trash = "trash",
  rightAngleCircle = "right-angle-circle",
  textFile = "text-file",
  listFile = "list-file",
  more = "more",
  tier = "tier",
  shift = "shift",
  playLight = "play-light",
  completeLight = "complete-light",
  cancel = "cancel",
  playDark = "play-dark",
  completeDark = "complete-dark",
  // icons list
}
