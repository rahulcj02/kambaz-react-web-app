export default function Modules() {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <input type="button" id="wd-collapse-btn" value="Collapse All" />
                    </td>
                    <td>
                        <input type="button" id="wd-progress-btn" value="View Progress" />
                    </td>
                    <td>
                        <select id="wd-select-publish">
                            <option value="Publish All" selected>Publish All</option>
                            <option value="Publish Some">Publish Limited</option>
                        </select>
                    </td>
                    <td>
                        <input type="button" id="wd-add-module-btn" value="+ Module" />
                    </td>
                </tr>
            </table>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span id="wd-lesson-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-lesson-contents">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span id="wd-lesson-title">READING</span>
                            <ul className="wd-lesson-contents">
                                <li id="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li id="wd-content-item">Full Stack Developer - Chapter 2 - Creaing User</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span id="wd-lesson-title">SLIDES</span>
                            <ul className="wd-lesson-contents">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}