import style from "./Support.module.css";
import Accordian from "./Accordian";
function Support() {
  const data = [
    {
      id: 1,
      question: "What are the services do you offer",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis vitae tempora quod provident tenetur culpa dolore facere? Earum, dolor?",
    },
    {
      id: 2,
      question: "what are our preferred method of payment",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iusto veniam eveniet labore impedit nam",
    },
    {
      id: 3,
      question: "Are your services beginners friendly",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sed. Dolores,",
    },
  ];
  return (
    <div className={style.user_support}>
      <div className={style.user_message}>
        <h1>How can we help you?</h1>
        <p>
          If you cannot find answer to your question in our FAQ, you can always
          contact us.
          <br /> We will answer to you shortly!
        </p>
        <textarea placeholder="Write your message here" />
        <button type="submit">Submit</button>
      </div>
      <div className={style.user_faq}>
        <div className={style.acc_title}>
          <h1>Frequently Asked Question</h1>
        </div>
        <div>
          <div className={style.info}>
            {data.map((question) => (
              <Accordian key={question.id} {...question} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
