import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <>
      <p className={css["text"]}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </>
  );
};

export default NotFoundPage;
