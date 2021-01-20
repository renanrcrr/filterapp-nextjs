import {Component} from 'react';

import {
    Button,
    Card,
    Layout,
    Page,
    Banner,
    CalloutCard,
    Badge
  } from '@shopify/polaris';
  import { Table } from 'react-bootstrap';
  import {AiOutlineSmile} from 'react-icons/ai'; 
  import {BiPaperPlane} from 'react-icons/bi';
  import {BsChatDots} from 'react-icons/bs';
  
  class Home extends Component {
    render() {
      return (
        
        <Page doubleColumn 
        title="Welcome, Demo Store Image Direct!"
        >
          <Layout>
            <Layout.Section>
              <h3>Set up your Image Direct filter.</h3>
            </Layout.Section>

            <Layout.Section secondary>
              <img src="https://renanrodrigues.s3.us-east-2.amazonaws.com/ID_Themes_RGB.svg" width="300px" height="100px"/>
            </Layout.Section>

            <Layout.Section>
              <Banner 
                title="What's new: Search page display" 
                action={{content: 'Try it now'}}
                status="info"
                onDismiss={() => {}}
              >
                <p>Now you can choose to show collections and/ or pages, blogs, 
                  articles as search results with the help of our latest released 
                  feature Search page display.</p>
              </Banner>
            </Layout.Section>

            <Layout.Section>
              <CalloutCard
                title="The filter is not alive yet. Please check the filter trees and publish 
                whenever you are ready."
                illustration="https://renanrodrigues.s3.us-east-2.amazonaws.com/not_live.png"
                primaryAction={{
                  content: 'View theme status',
                  url: 'https://www.shopify.com',
                }}
              /><br/><br/>
            </Layout.Section>

            <Layout.Section secondary>
              <Card 
               title="Plan status:" 
               sectioned
              > 
                <p><Badge status="attention">Trial</Badge></p>
                <p>13 days left of your trial, ready to subscribe?</p>
                <Button primary>Select plan</Button>
              </Card>
            </Layout.Section>
          
            <Layout.Section>
            <h3>Menu</h3>
              <a href="#">Manage Instant Search</a>
              <p>
                Manage all instant search display.
              </p>
              <br/>
              <a href="#">Switch Layout</a>
              <p>
                Switch the layout of a filter on a theme (horizontal-vertical and vice versa).
              </p>
            </Layout.Section>

            <Layout.Section secondary>
              <br/>
              <a href="#">Manage Instant Search</a>
              <p>
                Manage all instant search display.
              </p>
              <br/>
              <a href="#">Switch Layout</a>
              <p>
                Switch the layout of a filter on a theme (horizontal-vertical and vice versa).
              </p>
            </Layout.Section><br/>
          
            <CalloutCard
              title="Sync your online store"
              illustration="https://renanrodrigues.s3.us-east-2.amazonaws.com/sync.png"
              primaryAction={{content: 'Sync now'}}
            >
              <p>Auto-sync is triggered regularly, 
                or you can click the button to sync now.</p>
              <p>Recent sync done: <b>11-12-2020 4:25pm</b></p>
            </CalloutCard>

            <Layout.Section popoverActions={[{content: 'Dismiss', onAction: () => {}}]}>  
              <h3>Guide to knowledge base</h3>

              <Table>
                <tbody>
                <tr>
                  <th>What's new with Boost Product Filter and Search V2.</th>
                  <th>Get started with Boost Product Filter and Search.</th>
                  <th>Create a ticket and we will be  in touch within 6 hours.</th>
                </tr>  
                <tr>
                  <td>
                    <a href="#">
                      <img src="https://renanrodrigues.s3.us-east-2.amazonaws.com/not_live.png" width="200px"/>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://renanrodrigues.s3.us-east-2.amazonaws.com/not_live.png" width="200px"/>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <img src="https://renanrodrigues.s3.us-east-2.amazonaws.com/not_live.png" width="200px"/>
                    </a>
                  </td>
                </tr>
                </tbody>
              </Table>        
            </Layout.Section>

            <Layout.Section>  <br/><br/>
              <Table>
                <tbody>
                  <tr>
                    <th>Talk to us directly via live chat to get help with your question.</th>
                    <th>Find a solution for your problem with the app documents and tutorials.</th>
                    <th>Create a ticket and we will be  in touch within 6 hours.</th>
                  </tr>
                  <tr>
                    <td><h4><BsChatDots /><a href="#"> Start Live Chat</a></h4></td>
                    <td><h4><AiOutlineSmile /><a href="#"> Visit Help Center</a></h4></td>
                    <td><h4><BiPaperPlane /><a href="#"> Send a Support Ticket</a></h4></td>
                  </tr>
                </tbody>
              </Table>        
            </Layout.Section>
            
            <CalloutCard
              title="Feedback"
              illustration="https://renanrodrigues.s3.us-east-2.amazonaws.com/feedback.png"
              primaryAction={{content: 'Leave a feedback'}}
            >
              <p>Got a feedback or a feature request to share? 
                We would love to hear what you think. 
                Your ideas and interests keep us going!</p>
            </CalloutCard>
          </Layout><br/>
        </Page>
      );
    }
  }
  
  export default Home;