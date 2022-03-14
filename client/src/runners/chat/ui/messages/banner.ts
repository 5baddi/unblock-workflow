import { IEpilogue } from "tripetto-runner-foundation";
import { IChatStyles } from "../../interfaces/styles";
import { L10n } from "tripetto-runner-foundation";

export const banner = (styles?: IChatStyles) =>
    !styles || !styles.noBranding
        ? (l10n: L10n.Namespace): IEpilogue => ({
              title: l10n.pgettext("runner:chat", "Want to make a chat-style conversation like this for free?"),
              description: l10n.pgettext(
                  "runner:chat",
                  "Tripetto is for making elegantly personal form and survey experiences with response boosting conversational powers."
              ),
              button: {
                  label: l10n.pgettext("runner:chat", "Create one now!"),
                  url: "https://tripetto.com/your-tripetto-experience/?utm_source=tripetto_runner_chat&utm_medium=tripetto_runners&utm_campaign=tripetto_branding&utm_content=closing",
                  target: "blank",
              },
          })
        : undefined;
