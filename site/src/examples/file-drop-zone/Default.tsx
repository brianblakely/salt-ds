import { ReactElement } from "react";
import {
  FileDropZone,
  FileDropZoneIcon,
  FileDropZoneTrigger,
  Text,
} from "@salt-ds/core";

export const Default = (): ReactElement => (
  <FileDropZone style={{ width: 300 }}>
    <FileDropZoneIcon />
    <strong>Drop files here or</strong>
    <FileDropZoneTrigger />
    <Text>Only .png files</Text>
  </FileDropZone>
);
