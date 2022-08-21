import Link from "next/link";
import { useState } from "react";
const Group = () => {
  let acad_ids = {
    "2021 - 22": "21",
    "2020 - 21": "20",
    "2019 - 20": "19",
    "2018 - 19": "18",
    "2017 - 18": "17",
    "2016 - 17": "16",
    "2015 - 16": "15",
  };
  let degrees = {
    Masters: "M",
  };

  let exam_ids = {
    "Special Exam": "C",
    "Semester Exam - May": "E",
    "Semester Exam - Dec": "O",
    "Annual Exam": "A",
  };

  let course_ids = {
    "Master of Computer Application": "MCA",
    "Master of Commerce": "MCM",
    "Master of Technology (CS)": "MCS",
    "Master of Education": "MED",
    "MA Economics": "MES",
    "MA History": "MHS",
    "MA Islamic Studies": "MIS",
    "MA Journalism & Mass Comm.": "MJR",
    "MA Arabic": "MLA",
    "MA English": "MLE",
    "MA Hindi": "MLH",
    "MA Translation Studies": "MLL",
    "MA Persian": "MLP",
    "MA Urdu": "MLU",
    "MS Mathematics": "MMT",
    "MA Public Admin.": "MPA",
    "MA Political Science": "MPS",
    "MA Sociology": "MSO",
    "Master of Social Work": "MSW",
    "MA Women Studies": "MWS",
  };

  let sems = {
    First: "01",
    Second: "02",
    Third: "03",
    Fourth: "04",
  };

  const [payload, setPayload] = useState({
    academic: "",
    semester: "",
    degree: "",
    course: "",
    exam: "",
  });

  const handleAcademic = (e) => {
    setPayload((prevData) => ({ ...prevData, academic: e.target.value }));
  };
  const handleDegree = (e) => {
    setPayload((prevData) => ({ ...prevData, degree: e.target.value }));
  };
  const handleExam = (e) => {
    setPayload((prevData) => ({
      ...prevData,
      exam: e.target.value,
    }));
  };

  const handleSemester = (e) => {
    setPayload((prevData) => ({ ...prevData, semester: e.target.value }));
  };
  const handleCourse = (e) => {
    setPayload((prevData) => ({
      ...prevData,
      course: e.target.value,
    }));
  };

  const handleSubmit = () => {
    let exam_id =
      payload.exam == "O"
        ? payload.exam + payload.academic
        : payload.exam + (parseInt(payload.academic) + 1).toString();
    let url = `https://manuucoe.in/ums/Resultsheets/view?academic=${
      payload.academic
    }&degree=${payload.degree}&exam=${exam_id}&course=${
      payload.course + payload.semester
    }`;
    setPayload({
      academic: "",
      semester: "",
      degree: "",
      course: "",
      exam: "",
    });
    let wind = window.open(url, "Group Result", "width=700,height=700");
  };
  return (
    <div className="bg-dark text-white">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Result Finder</a>
          <Link href="/">
            <a className="btn btn-outline-dark">Home</a>
          </Link>
        </div>
      </nav>
      <div className="container p-5">
        <form>
          <div className="mb-3">
            <label className="form-label">Academic Year</label>
            <select value={payload.academic} onChange={handleAcademic} className="form-select">
              <option value="">Please Select</option>
              {Object.keys(acad_ids).map((val, index) => (
                <option key={val + index} value={acad_ids[val]}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Semester</label>
            <select value={payload.semester} onChange={handleSemester} className="form-select">
              <option value="">Please Select</option>
              {Object.keys(sems).map((val, index) => (
                <option key={val + index} value={sems[val]}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Degree</label>
            <select value={payload.degree} onChange={handleDegree} className="form-select">
              <option value="">Please Select</option>
              {Object.keys(degrees).map((val, index) => (
                <option key={val + index} value={degrees[val]}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Course</label>
            <select value={payload.course} onChange={handleCourse} className="form-select">
              <option value="">Please Select</option>
              {Object.keys(course_ids).map((val, index) => (
                <option key={val + index} value={course_ids[val]}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Exam</label>
            <select value={payload.exam} onChange={handleExam} className="form-select">
              <option value="">Please Select</option>
              {Object.keys(exam_ids).map((val, index) => (
                <option key={val + index} value={exam_ids[val]}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Group;
