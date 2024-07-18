
import { useState } from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { FaFolderPlus, FaTrash } from "react-icons/fa";

export default function Contact() {
  const [t] = useTranslation();
  const [attachedFile, setAttachedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAttachedFile(file);
  };

  const handleFileDelete = () => {
    setAttachedFile(null);
  };

  return (
    <div className="container Contactt same mb-5 mt-5">
      <form
        method="POST"
        action="https://formsubmit.co/contact@arabicsc.com"
        encType="multipart/form-data"
        id="Contact"
      >
        <label>{t("Name-form")}</label>
        <input type="text" name="user_name" required />

        <label>{t("Email-form")}</label>
        <input type="email" name="user_email" required />

        <label>{t("Phone-form")}</label>
        <input type="number" name="user_number" required />

        <label>{t("Textarea-form")}</label>
        <textarea name="message" required></textarea>
        <ul className="SendDelete d-flex align-items-center p-0">
          <li>
            <label>{t("File-form")}</label>
            <div className="file-upload-container">
              <label className="btnfolder" htmlFor="btnfolder">
                <FaFolderPlus />
              </label>
              {attachedFile && (
                <div className="file-info">
                  <p className="m-2">File attached: {attachedFile.name}</p>
                  <button
                    type="button"
                    className="delete-file-btn m-2"
                    onClick={handleFileDelete}
                  >
                    <FaTrash />
                  </button>
                </div>
              )}
              <input
                type="file"
                className="visb"
                id="btnfolder"
                name="attachment"
                accept="image/png, image/jpeg, image/jpg, .xlsx, .pdf, .docx, .doc"
                onChange={handleFileChange}
              />
            </div>
          </li>
          <li>
            {" "}
            <div className="button-container">
              <input type="submit" value={t("Send-form")} />
            </div>
          </li>
        </ul>

        <input type="hidden" name="_captcha" value="false" />
      </form>
    </div>
  );
}
