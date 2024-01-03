import { ReactElement } from "react";
import {
  FileDropZone,
  FileDropZoneIcon,
  FileDropZoneTrigger,
  Text,
} from "@salt-ds/core";

export const Error = (): ReactElement => (
  <FileDropZone style={{ width: 300 }} status="error">
    <FileDropZoneIcon status="error" />
    <strong>File format is not allowed</strong>
    <FileDropZoneTrigger accept=".png" />
    <Text>Only .png files</Text>
  </FileDropZone>
);
