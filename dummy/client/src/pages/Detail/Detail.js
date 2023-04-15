import React, { useState, useEffect } from "react";
import "./Detail.scss";
import Navbar from "../../component/Navbar/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Footer from "../../component/Footer/Footer";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Detail() {
  const chartdata = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [6, 9],
        lebel: "Sentiments",
        backgroundColor: ["green", "red"],
        borderWidth: 2,
        borderColor: "Black",
      },
    ],
  };

  const [data, Setdata] = useState();
  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    setSaved(true);
  };
  const [searchParams] = useSearchParams();
  const [artQuery, setArtQuery] = useState(
    searchParams.get("art") ? searchParams.get("art") : null
  );
  const fetchdata = async () => {
    await fetch("https://amiteshpatel.pythonanywhere.com/topic_news/4")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        // console.log(typeof(data));
        const data = Object.values(res);
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === artQuery) {
            Setdata(data[i]);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchdata();
    // console.log(data);
  }, [artQuery, data]);

  return (
    <>
      <Navbar />
      <div className="detailnews">
        <div className="content">
          <div className="detailnewstitle">
            <Link to="/">
              <button>
                <i
                  class="fa-solid fa-left-long fa-lg"
                  style={{ color: "white" }}
                ></i>
              </button>
            </Link>
            <h1>
              {" "}
              War-crimes warrant for Putin could complicate Ukraine peace
            </h1>
          </div>
          <div className="imgnpara">
            <div className="newsimage w3-hover-shadow">
              <img
                src="https://th-i.thgim.com/public/incoming/wa08nu/article66690957.ece/alternates/LANDSCAPE_1200/Russia_Ukraine_Putin_Court_Quandary_83075.jpg"
                alt=""
              />
            </div>
            <div className="alltext">
              <div className="newsdesc">
                <p>
                  An international arrest warrant for President Vladimir Putin
                  raises the prospect of the man whose country invaded Ukraine
                  facing justice, but it complicates efforts to end that war in
                  peace talks. Judges in The Hague found “reasonable grounds to
                  believe” that Mr. Putin and his commissioner for children's
                  rights were responsible for war crimes, specifically the
                  unlawful deportation and unlawful transfer of children from
                  occupied areas of Ukraine to Russia. Former Serbian strongman
                  Slobodan Milosevic, a driving force behind the Balkan wars of
                  the 1990s, went on trial for war crimes, including genocide,
                  at a United Nations tribunal in The Hague after he lost power.
                  He died in his cell in 2006 before a verdict could be reached.
                  Serbia, which wants European Union membership but has
                  maintained close ties to Russia, is one of the countries that
                  has criticized the ICC's action. The warrants “will have bad
                  political consequences” and create “a great reluctance to talk
                  about peace and about truce” in Ukraine, populist Serbian
                  President Aleksandar Vucic said.
                </p>
              </div>
              <div className="pienother">
                <div className="otherinfo">
                  <span>Date Published: 16 August</span> <br />
                  <span>Source: Times of India</span> <br />
                </div>
                <div className="pie" style={{ width: "30%" }}>
                  {" "}
                  <Pie
                    data={chartdata}
                    options={{
                      responsive: true,
                      plugins: {
                        fontSize: 30,
                        text: "Sentiments",
                        display: true,
                      },
                      legend: {
                        labels: {
                          font: { size: 15 },
                        },
                      },
                    }}
                  ></Pie>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
