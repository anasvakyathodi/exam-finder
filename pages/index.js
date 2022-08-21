// import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    let url = "https://anz-academy-server.herokuapp.com/results";
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setResults(data.data);
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  }, []);
  const handleLink = (link) => {
    window.open(link, "Exam Result", "width=700,height=700");
  };
  return (
    <div className="bg-dark">
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Result Finder</a>
          <form className="d-flex">
            <a
              className="btn btn-outline-dark"
              target="_blank"
              href="https://linktr.ee/anas_vakyathodi"
            >
              Check Me
            </a>
          </form>
        </div>
      </nav>
      <div className="row m-0 p-0">
        <div className="col-xs-12 col-6">
          <div className="container d-flex align-items-center flex-column">
            <Link href="/group">
              <a className="btn btn-outline-light m-3">Group Result</a>
            </Link>
            <Link href="/individual">
              <a className="btn btn-outline-light">Individual Result</a>
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-6 py-3">
          <h4 className="text-white">Recent Results</h4>
          <div
            className="border p-3"
            style={{ maxHeight: "80vh", overflow: "scroll" }}
          >
            {results.map(({ date, stream, link }) => (
              <div
                className="alert alert-info"
                role="alert"
                style={{ cursor: "pointer" }}
                onClick={handleLink.bind(this, link)}
              >
                <span>
                  {date}: {stream}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
