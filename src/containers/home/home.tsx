import React from "react";
import { Col, Container, Form, Row, Tab } from "react-bootstrap";
import {
  Section,
  TabsBlock,
  InputGroupBlock,
  InputGroupSearch,
  FavouritesList,
  BadgeItem,
  HeadingSearch,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <Section>
            <TabsBlock defaultActiveKey="profile" className="mb-4">
              <Tab eventKey="home" title="I want to hire contractors ">
                <HeadingSearch>
                  Hire Remote Developers Within 24 hrs
                </HeadingSearch>
              </Tab>
              <Tab eventKey="profile" title="I want to deploy my bench">
                <HeadingSearch className="mb-4">
                  Hire Remote Developers Within 24 hrs
                </HeadingSearch>
                <Form>
                  <Form.Group className="mb-4" controlId="ControlInput1">
                    <InputGroupBlock className="mb-4">
                      <Form.Control
                        aria-label=""
                        placeholder="Search Candidates by Technology"
                      />
                      <InputGroupSearch>
                        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                      </InputGroupSearch>
                    </InputGroupBlock>
                  </Form.Group>
                </Form>
              </Tab>
            </TabsBlock>
          </Section>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 0 }}>
          <FavouritesList direction="horizontal" gap={2}>
            <li>
              <BadgeItem href="#">
                .NET
              </BadgeItem>
            </li>
            <li>
              <BadgeItem href="#">
                Android
              </BadgeItem>
            </li>
            <li>
              <BadgeItem href="#">
                Angular
              </BadgeItem>
            </li>
            <li>
              <BadgeItem href="#">
                Apttus CPQ
              </BadgeItem>
            </li>
            <li>
              <BadgeItem href="#">
                Artificial Intelligence
              </BadgeItem>
            </li>
            <li>
              <BadgeItem href="#">
                Automation Anywhere
              </BadgeItem>
            </li>
          </FavouritesList>
        </Col>
      </Row>
    </Container>
  );
};
