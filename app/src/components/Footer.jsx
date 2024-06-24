import React from "react";
import { Row, Col, Container } from 'reactstrap';

function AppFooter(props){
    return(
        <div className="footer">
          <Row className="row-2">
            <Col md="12" className="col">
              <h3>Tools</h3>
              <div id="tools-div">
                  <div class="concepts">Spring Boot</div>
                  <div class="concepts">Java</div>
                  <div class="concepts">React</div>
                  <div class="concepts">HTML</div>
                  <div class="concepts">CSS</div>
                  <div class="concepts">MongoDB</div>
                  <div class="concepts">Jenkins</div>
                  <div class="concepts">Postman</div>
                  <div class="concepts">Unit Testing</div>
                  <div class="concepts">Sonarque</div>
                  <div class="concepts">OWASP</div>
                  <div class="concepts">Docker</div>
                  <div class="concepts">GitHub</div>
                  <div class="concepts">AWS ECR</div>
                  <div class="concepts">AWS EKS</div>
                  <div class="concepts">AWS EC2</div>
                  <div class="concepts">AWS VPC</div>
                  <div class="concepts">APIs</div>
                  <div class="concepts">Bootstrap</div>
                  <div class="concepts">JUnit5</div>
                  <div class="concepts">IntelliJ</div>
                  <div class="concepts">Maven</div>
                  <div class="concepts">CloudFormation</div>
                  <div class="concepts">JQuery</div>
                  <div class="concepts">JavaScript</div>
              </div>
            </Col>
{/*             <Col md="6" className="col"> */}
{/*                 <h4>Jenkins pipeline</h4> */}
{/*                 <section> */}
{/*                     <div className="icons"> */}
{/*                         <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em" {...props}> */}
{/*                               <path */}
{/*                                 fill="currentColor" */}
{/*                                 d="M9.358 2.145a8.209 8.209 0 00-3.716 0c-.706-.433-1.245-.632-1.637-.716a2.17 2.17 0 00-.51-.053 1.258 1.258 0 00-.232.028l-.01.002-.004.002h-.003l.137.481-.137-.48a.5.5 0 00-.32.276 3.12 3.12 0 00-.159 2.101A3.354 3.354 0 002 5.93c0 1.553.458 2.597 1.239 3.268.547.47 1.211.72 1.877.863-.11.305-.138.628-.116.958v.598c-.407.085-.689.058-.89-.008-.251-.083-.444-.25-.629-.49a4.798 4.798 0 01-.27-.402l-.057-.093a9.216 9.216 0 00-.224-.354c-.19-.281-.472-.633-.928-.753l-.484-.127-.254.968.484.127c.08.02.184.095.355.346.063.093.122.19.19.302l.068.11c.094.152.202.32.327.484.253.33.598.663 1.11.832.35.116.748.144 1.202.074V14.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-3.563c0-.315-.014-.604-.103-.873.663-.14 1.322-.39 1.866-.86.78-.676 1.237-1.73 1.237-3.292v-.001a3.354 3.354 0 00-.768-2.125 3.12 3.12 0 00-.159-2.1.5.5 0 00-.319-.277l-.137.48c.137-.48.136-.48.135-.48l-.002-.001-.004-.002-.009-.002a.671.671 0 00-.075-.015 1.261 1.261 0 00-.158-.013 2.172 2.172 0 00-.51.053c-.391.084-.93.283-1.636.716z" */}
{/*                               /> */}
{/*                         </svg> */}
{/*                     </div> */}
{/*                 </section> */}
{/*             </Col> */}
          </Row>
          <div className="icons">
            <a aria-label="GitHubPage" title="GitHub" href="https://github.com/tutu-AO/crud-operations-springboot">
                <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            </a>
            <span>GitHub Repository</span>
          </div>
        </div>
    );
}

export default AppFooter;