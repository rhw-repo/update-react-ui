import { useRef, useState } from "react";
import AttributionList from "../attribution-list/AttributionList";
import styles from "./AttributionListDialog.module.css";
import AbsoluteLinkTemplate from "../ui-elements/absolute-link-template/AbsoluteLinkTemplate.tsx";
import {
  noIconLinks,
  type AbsoluteLinkTemplateNoIcon,
} from "../../data/absoluteLinks.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Images & Video credits dialog is hidden until it gets more design work; set true to restore
const SHOW_ATTRIBUTIONS = false;

const AttributionListDialog: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showCopyrightLink, setShowCopyrightLink] = useState(false);

  const handleShow = () => {
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const handleHide = () => {
    dialogRef.current?.close();
    setIsOpen(false);
  };

  const targetLink: AbsoluteLinkTemplateNoIcon = noIconLinks.find(
    (link) => link.id === "copyright-1",
  ) as AbsoluteLinkTemplateNoIcon;

  return (
    <>
      <div className={styles.legalInfo}>
        {!showCopyrightLink ? (
          <button
            type="button"
            className="interactive button--primary"
            onClick={() => setShowCopyrightLink(true)}
          >
            {targetLink.name}
          </button>
        ) : (
          <AbsoluteLinkTemplate
            url={targetLink.url}
            className="interactive button--primary"
          >
            {targetLink.name}
          </AbsoluteLinkTemplate>
        )}

        {SHOW_ATTRIBUTIONS && !isOpen && (
          <button
            type="button"
            className="interactive button--primary"
            onClick={handleShow}
          >
            Images & Video
          </button>
        )}
      </div>

      {SHOW_ATTRIBUTIONS && (
        <dialog ref={dialogRef} className={styles.attributionDialog}>
          <div className={styles.buttonWrapper}>
            <button
              type="button"
              className={`interactive button--primary ${styles.closeButton}`}
              onClick={handleHide}
            >
              <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
              <span className="sr-only">Hide Credits</span>
            </button>
          </div>
          <div className={styles.attributionLinksWrapper}>
            <h2>Creators</h2>
            <div className={styles.attributionList}>
              <AttributionList />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default AttributionListDialog;
