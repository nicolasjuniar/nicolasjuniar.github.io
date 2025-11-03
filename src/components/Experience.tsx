import { motion } from "framer-motion";
import { fadeIn } from "../animations/variants";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 px-6 md:px-0 max-w-4xl mx-auto"
    >
      <h3 className="text-3xl font-bold text-teal-400 mb-6">Experience</h3>
      <div className="space-y-10">
        <div>
          <h4 className="text-xl font-semibold text-teal-300">
            Mobile Application Developer - Investree
          </h4>
          <p className="text-gray-500 text-sm">May 2018 - Mar 2024</p>
          <ul className="list-disc list-inside mt-3 text-gray-400 space-y-1">
            <li>
              Implemented the <strong>MVVM desing pattern</strong> with{" "}
              <strong>ViewBinding</strong>
            </li>
            <li>
              Adopted the <strong>Repository Pattern</strong> to manage data
              flow between API services and ViewModel, ensuring clear separation
              of concerns and testable logic.
            </li>
            <li>
              Conducted <strong>peer-to-peer code reviews</strong> with other
              Android developers and the tech lead to maintain code quality,
              consistency, and adherence to best practices.
            </li>
            <li>
              Actively participated in <strong>Agile Sprint cycles</strong>,
              releasing new app versions to{" "}
              <strong>Google Play Store every two weeks</strong>
              using <strong>Gradle Play Publisher</strong>.
            </li>
            <li>
              Created and maintained{" "}
              <strong>Data Dictionary Mapping (DDM)</strong> to support
              technical documentation and inter-team communication.
            </li>
            <li>
              Utilized <strong>Postman</strong> for API documentation and
              integration testing.
            </li>
            <li>
              Performed{" "}
              <strong>
                regular updates of Android libraries, SDKs, and deprecated code
                adjustments
              </strong>{" "}
              following the latest Android releases.
            </li>
            <li>
              Integrated a wide range of{" "}
              <strong>modern libraries and tools</strong> to improve development
              efficiency, performance, and security:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-400">
                <li>
                  <strong>Dependency Injection:</strong> Koin
                </li>
                <li>
                  <strong>Reactive & Lifecycle:</strong> LiveData, RxBinding
                </li>
                <li>
                  <strong>Networking:</strong> Retrofit, OkHttp
                </li>
                <li>
                  <strong>Paging & Caching:</strong> Paging
                </li>
                <li>
                  <strong>Testing & Quality:</strong> Mockito, JaCoCo, Detekt,
                  SonarQube
                </li>
                <li>
                  <strong>Analytics & Monitoring:</strong> MoEngage, NewRelic,
                  Firebase Crashlytics
                </li>
                <li>
                  <strong>UI & Visualization:</strong> MPAndroidChart, Glide
                </li>
                <li>
                  <strong>Security:</strong> Biometric, Encrypted
                  SharedPreferences, RSA encryption/decryption, DexGuard,
                  ProGuard
                </li>
                <li>
                  <strong>Debugging:</strong> Chucker
                </li>
                <li>
                  <strong>Remote Config:</strong> Firebase Remote Config
                </li>
              </ul>
            </li>

            <li>
              Collaborated with a <strong>cross-functional team</strong>{" "}
              consisting of 1 Android Developer, 1 iOS Developer, 1 Backend
              Developer, 1 Web Developer, 2 QA Engineers, and 1 Project Manager.
            </li>
            <li>
              Used <strong>Jira</strong> for task management,{" "}
              <strong>Slack</strong> for team communication, and{" "}
              <strong>Bitbucket</strong> and <strong>GitLab</strong> for version
              control.
            </li>
            <li>
              Worked closely with UI/UX designers using <strong>Zeplin</strong>{" "}
              and <strong>Figma</strong> for design implementation and
              consistency.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-teal-300">
            Internship Front End Android - Binar Academy
          </h4>
          <p className="text-gray-500 text-sm">Dec 2017 - May 2018</p>
          <ul className="list-disc list-inside mt-3 text-gray-400 space-y-1">
            <li>
              <strong>Developed</strong> operational Android application using
              the <strong>MVP (Model–View–Presenter)</strong> design pattern.
            </li>
            <li>
              <strong>Implemented UI</strong> by translating{" "}
              <strong>Figma</strong> designs
            </li>
            <li>
              Integrated RESTful APIs using <strong>Retrofit</strong> and{" "}
              <strong>OkHttp</strong> for network communication and data
              handling.
            </li>
            <li>
              Managed tasks via <strong>Trello</strong> and followed{" "}
              <strong>Git Flow</strong> using <strong>GitLab</strong>.
            </li>
            <li>
              Participated in{" "}
              <strong>
                sprint planning, daily stand-ups, and sprint retrospectives
              </strong>{" "}
              to deliver iterative improvements.
            </li>
            <li>
              <strong>Collaborated with mentors and peers</strong> to improve
              code quality, receive feedback, and gain practical experience in a
              real-world development workflow.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
