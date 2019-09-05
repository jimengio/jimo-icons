import * as React from "react";
import { Component, CSSProperties } from "react";
import { cx } from "emotion";

import "./fonts/jimo.css";

import fontsDict from "./fonts";

export type IconType = "lg" | "2x" | "3x" | "4x" | "5x";

export interface IconProps {
  name: EJimoIcon;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  onMouseEnter?: (event: React.MouseEvent) => void;
}

let iconPrefix = "jimo-icon";

let JimoIcon: React.FC<IconProps> = (props) => {
  let classNames = iconPrefix;

  classNames = props.className ? cx(classNames, props.className) : classNames;

  return (
    <i
      style={props.style}
      className={classNames}
      aria-hidden="true"
      onMouseEnter={props.onMouseEnter}
      onClick={props.onClick}
      dangerouslySetInnerHTML={{ __html: `&#${fontsDict[props.name]}` || `NONE:${props.name}` }}
    ></i>
  );
};

export default JimoIcon;

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
  leftAngleCircle = "left-angle-circle",
  loading = "loading",
  measurementDataAnalysis = "measurement-data-analysis",
  mechanicalAnalysis = "mechanical-analysis",
  mobile = "mobile",
  numberInput = "number-input",
  packing = "packing",
  play = "play",
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
  quit = "quit",
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
  layers = "layers",
  workingShift = "working-shift",
  playCircle = "play-circle",
  completeCircle = "complete-circle",
  cancelCircle = "cancel-circle",
  playEmbossed = "play-embossed",
  completeEmbossed = "complete-embossed",
  alarm = "alarm",
  sort = "sort",
  menuPushLeft = "menu-push-left",
  menuPushRight = "menu-push-right",
  // icons list
}
