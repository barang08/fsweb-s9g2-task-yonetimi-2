import React from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale/tr"


const Task = ({ taskObj, onComplete }) => {
  const deadlineInDate = new Date(taskObj.deadline);

  const deadlineInText = formatDistanceToNow(deadlineInDate, { addSuffix: true, locale: tr })

  const today = new Date()

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{deadlineInText} </span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
