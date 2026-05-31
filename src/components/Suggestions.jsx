import styles from "./Suggestions.module.css";

function Suggestions() {
  const suggestions = [
    "Designer",
    "Programming",
    "Digital Marketing",
    "Video",
    "Animation",
  ];
  return (
    <div className={styles.suggestions}>
      <span className={styles.label}>Suggestion:</span>

      {suggestions.map((item) => (
        <a key={item} href="/">
          {item} <span>,</span>
        </a>
      ))}
    </div>
  );
}

export default Suggestions;
