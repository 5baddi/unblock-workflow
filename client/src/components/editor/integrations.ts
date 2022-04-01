import { Layer } from "@marblecore/ui-layers";
import { NodeBlock } from "tripetto";
import { N8N_URL } from "../../settings";

declare global {
  interface Window {
    customIntegrations: {
      name: string;
      integrationIframeContainer: HTMLDivElement | null;
    };
  }
}

export const initCustomIntegrations = (): void => {
  window.customIntegrations = {
    name: "",
    integrationIframeContainer: null,
  };

  window.addEventListener('message', ({data}) => {
    data = JSON.parse(data);
    if (data.command === 'closeIntegration') {
      closeIntegrationPopup();
    }
  });
};

export const setCurrentCustomIntegration = (name: string): void => {
  window.customIntegrations.name = name;
};

export const getCurrentCustomIntegration = (): string => {
  return window.customIntegrations.name;
};

export const isCustomIntegrationsPopupOpen = (): boolean => {
  return window.customIntegrations.integrationIframeContainer instanceof HTMLDivElement;
};

export const openIntegrationPopup = (): void => {
  if (window.customIntegrations.integrationIframeContainer instanceof HTMLDivElement) {
    return;
  }

  let iframeContainer = document.createElement('div');
  iframeContainer.id = 'custom-integration-iframe-container';

  let iframeOverlay = document.createElement('div')
  iframeOverlay.id = "custom-integration-iframe-overlay";

  let iframeElement = document.createElement("iframe");
  iframeElement.id = "custom-integration-iframe";
  iframeElement.src = `${N8N_URL}/workflow?integration=${window.customIntegrations.name}`;

  iframeContainer.appendChild(iframeOverlay);
  iframeContainer.appendChild(iframeElement);
  iframeOverlay.addEventListener('click', function(event) {
    closeIntegrationPopup();
  });

  window.customIntegrations.integrationIframeContainer = iframeContainer;
  document.body.appendChild(iframeContainer);

  return;
}

export const closeIntegrationPopup = (): void => {
  if(!(window.customIntegrations.integrationIframeContainer instanceof HTMLDivElement)) {
    return;
  }

  window.customIntegrations.integrationIframeContainer.remove();
  window.customIntegrations.integrationIframeContainer = null;

  return;
}

export class CustomIntegrationBlock extends NodeBlock {
  public BLOCK_NAME: string = '';
  open(pLayer: Layer): boolean {
    setCurrentCustomIntegration(this.BLOCK_NAME);
    openIntegrationPopup();

    return true;
  }

  assignedToNode(pPrevious?: NodeBlock) {
    return () => {
      setCurrentCustomIntegration(this.BLOCK_NAME);
      openIntegrationPopup();
    };
  }
}
