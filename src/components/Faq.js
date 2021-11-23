import React from "react"
import "../styles/faq.css"

export default function Faq() {
  return (
      <section className="faq-wrapper">
          <h1 className="faq-heading">Frequently Asked Questions</h1>
      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500" className="qn-wrapper">
        <input type="checkbox" id="faq-1" />
        <h2 className="heading">
          <label for="faq-1">1. What is fitabo?</label>
        </h2>
        <div className="ans">
          <p>
          Fitabo is an online platform that connects
fitness, sports, and gym enthusiasts together.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500" className="qn-wrapper">
        <input type="checkbox" id="faq-2" />
        <h2 className="heading">
          <label for="faq-2">2. Who is fitabo for?</label>
        </h2>
        <div className="ans">
          <p>
            <ul>
              <li>
                For people who wants to get fit but they don't have enough time,
              </li>
              <li>
                For instructors who are looking for customers but can't find
                them,
              </li>
              <li>For the families who wants to get fit together,</li>
              <li>For GYMS, who are looking for instructors.</li>
            </ul>
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500"  className="qn-wrapper">
        <input type="checkbox" id="faq-3" />
        <h2 className="heading">
          <label for="faq-3">3. How does fitabo work?</label>
        </h2>
        <div className="ans">
          <p>fitabo categorizes its users in two groups.</p>
          <p>
            <strong>1. Primary Users:</strong> Those who are looking for fitness
            sessions and they need a trainer who can help them reach their
            goals.
          </p>
          <h3>How does it work?</h3>
          <ul>
            <li>
              fitabo trainers visit your home, workspace, or other creative
              spaces on your schedule.
            </li>
            <li>
              fitabo trainer will maximize the minimum time you have available
              to make a fitness session part of your schedule and goals.
            </li>
            <li>
              A fitabo trainer is a trainer who is well equipped with mats,
              props, and customized classes to make your session easy.
            </li>
          </ul>
          <p>
            <strong>2. Secondary Users: </strong>Those who are looking for
            individuals to train. If you are a fitness coach, personal trainer
            and you know that you can handle training others, fitabo gives you
            an opportunity to do so but with certification.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500"  className="qn-wrapper">
        <input type="checkbox" id="faq-4" />
        <h2 className="heading">
          <label for="faq-4">
            4. What fitness sessions can I provide as a fitabo trainer?
          </label>
        </h2>
        <div className="ans">
          <p>
            fitabo coach or personal trainer is allowed to train anything
            related to fitness or sport as long as it’s a request from the
            customer and there&#39;s a good agreement between the two of them.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500"  className="qn-wrapper">
        <input type="checkbox" id="faq-5" />
        <h2 className="heading">
          <label for="faq-5">5. Do I pay to use fitabo?</label>
        </h2>
        <div className="ans">
          <p>
            Yes, we do charge 5 dollars to every fitabo primary user and we do
            take 30% of the money from every sale commision from a trainer.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="500"  className="qn-wrapper">
        <input type="checkbox" id="faq-6" />
        <h2 className="heading">
          <label for="faq-6">
            6. Would you like to know our story? (How fitabo was born?)
          </label>
        </h2>
        <div className="ans">
          <p>A lot to be said :)</p>
        </div>
      </div>        
      </section>
)
}
