import { Layer } from "@marblecore/ui-layers";
import { NodeBlock } from "tripetto";
import { N8N_URL } from "../../settings";

declare global {
  interface Window {
    customIntegrations: {
      name: string;
      integrationIframeContainer: HTMLDivElement | null;
      finishedLoadingDefinition: boolean;
    };
  }
}

export const initCustomIntegrations = (): void => {
  window.customIntegrations = {
    name: "",
    integrationIframeContainer: null,
    finishedLoadingDefinition: false,
  };

  window.addEventListener('message', ({data}) => {
    if ('command' in data && data.command === 'closeIntegration') {
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

export const declareDefinitionAsLoaded = (): void => {
  window.customIntegrations.finishedLoadingDefinition = true;
};

export const declareDefinitionAsStillLoading = (): void => {
  window.customIntegrations.finishedLoadingDefinition = false;
};

export const isDefinitionStillLoading = (): boolean => {
  return window.customIntegrations.finishedLoadingDefinition === false;
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
      if(isDefinitionStillLoading()) {
        return;
      }

      setCurrentCustomIntegration(this.BLOCK_NAME);
      openIntegrationPopup();
    };
  }
}
