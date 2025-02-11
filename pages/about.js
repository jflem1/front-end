import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import ValueCard from 'components/Cards/ValueCard/ValueCard';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { s3 } from 'common/constants/urls';
import styles from 'styles/about.module.css';

const pageTitle = 'About Us';

function About() {
  return (
    <div className={styles.About}>
      <Head title={pageTitle} />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/about.jpg`}
        className={styles.hero}
        title={pageTitle}
      />

      <Content
        theme="white"
        columns={[
          <>
            <p>
              <b>
                Operation Code is a non-profit charity helping the military community learn software
                development, enter the tech industry, and code the future.
              </b>
            </p>

            <p>
              We at Operation Code strive to provide an efficient way into a tech career for
              veterans, military spouses, and transitioning servicemembers. Read about our{' '}
              <Link href="/history">
                <a>organization&apos;s history </a>
              </Link>
              to learn more!
            </p>

            <p>
              Our volunteer team works tirelessly to provide mentorship for veterans and military
              spouses interested in learning about tech careers. Dozens of software engineers,
              product managers, system architects, security engineers, and various other IT
              professionals act as 1-on-1 mentors to our members.
            </p>

            <p>
              As a non-profit organization, we rely heavily on your support. If you are interested
              in helping us financially, please donate here or set your Amazon Smile organization to
              &ldquo;Operation Code&rdquo;. If you have questions about our organization, platforms,
              or services, please reference our{' '}
              <Link href="/faq">
                <a>FAQ</a>
              </Link>{' '}
              page. Otherwise, do not hesitate to reach out to our staff.
            </p>
          </>,
        ]}
      />

      <Content
        theme="secondary"
        title="What We Do"
        hasTitleUnderline
        columns={[
          <ImageCard
            alt="Two women pair programming"
            className={styles.imageCard}
            imageSource={`${s3}stock_paired-programming.jpg`}
          >
            <h6>Mentorship Program</h6>
            <p>
              Operation Code&apos;s mentorship program connects members with seasoned software
              developers to help you progress and achieve your goals.
            </p>
          </ImageCard>,
          <ImageCard
            alt="Man working on laptop"
            className={styles.imageCard}
            imageSource={`${s3}stock_laptop-working.jpg`}
          >
            <h6>Online Scholarships</h6>
            <p>
              Operation Code&apos;s online scholarships provide you the opportunity to kickstart
              your career in software development.
            </p>
          </ImageCard>,
          <ImageCard
            alt="Team of people working together at a coffee table"
            className={styles.imageCard}
            imageSource={`${s3}stock_teamwork-1.jpg`}
          >
            <h6>Career Services</h6>
            <p>
              Operation Code&apos;s career services team provides job opportunities, resume reviews,
              technical interview prep, and career guidance.
            </p>
          </ImageCard>,
          <ImageCard
            alt="Operation Code members pose together at Red Hat Summit 2017"
            className={styles.imageCard}
            imageSource={`${s3}photo_red-hat-summit-2.jpg`}
          >
            <h6>Conference Scholarships</h6>
            <p>
              Operation Code partners with tech conferences around the country and offers
              scholarship tickets to events throughout the year.
            </p>
          </ImageCard>,
          <ImageCard
            alt="Operation Code NYC Meet-up In 2019"
            className={styles.imageCard}
            imageSource={`${s3}nyc_meetup.jpg`}
          >
            <h6>Community Events</h6>
            <p>
              Join one of our local meetup chapters throughout the country, and learn with fellow
              members of the military community. Email us at
              <OutboundLink
                href="mailto:staff@operationcode.org"
                analyticsEventLabel="Email"
                hasIcon={false}
              >
                staff@operationcode.org
              </OutboundLink>{' '}
              to learn more.
            </p>
          </ImageCard>,
          <ImageCard
            alt="A pair of orange headphones resting on a laptop keyboard"
            className={styles.imageCard}
            imageSource={`${s3}headphones.jpg`}
          >
            <h6>Podcast</h6>
            <p>
              <Link href="/podcast">
                <a>We have a podcast!</a>
              </Link>{' '}
              You can listen into the amazing stories of our members. Visualize your success through
              others&apos; footsteps.
            </p>
          </ImageCard>,
          <ImageCard
            alt="Somebody lectures in front of a classroom"
            className={styles.imageCard}
            imageSource={`${s3}photo_oc-seattle-meetup.jpg`}
          >
            <h6>Code School Finder</h6>
            <p>
              We provide{' '}
              <Link href="/code_schools">
                <a>coding bootcamp finder</a>
              </Link>{' '}
              to help you find the best school for you. Disclaimer: We don&apos;t accept money from
              any coding bootcamps.
            </p>
          </ImageCard>,
          <ImageCard
            alt="An arm reaches for a book in a library"
            className={styles.imageCard}
            imageSource={`${s3}grab_book.jpg`}
          >
            <h6>Resources Database</h6>
            <p>
              We know there is an overwhelming amount of ways to teach yourself topics in tech, so
              our community maintains a{' '}
              <Link href="/resources">
                <a>resources database</a>
              </Link>{' '}
              to help you cope.
            </p>
          </ImageCard>,
        ]}
      />

      <Content
        theme="white"
        title="Mission"
        hasTitleUnderline
        columns={[
          <p>
            Operation Code is leading the way to expand opportunities for military veterans and
            their families. We aim to help veterans learn new skills and build their careers in the
            fast-growing technology sector. Our team’s mission - led by veterans and other
            dedicated, passionate volunteers - is to help open doors for our diverse member base
            through unique program offerings, such as our Software Mentor Program, conference
            scholarships, and employment services. All of this is made possible by individual
            donations and corporate partnerships.
          </p>,
        ]}
      />

      <Content
        theme="gray"
        title="Core Values"
        hasTitleUnderline
        columns={[
          <ValueCard
            name="Leadership"
            description="As leaders, we are responsible for what we do or fail to
            do.  We hold ourselves accountable for achieving results that
            accomplish the mission. We listen to our community to ensure we are
            working towards the vision. We will humbly remember that their service
            was of the highest order and that Operation Code works for them."
          />,
          <ValueCard
            name="Agility"
            description="We maintain an attitude of continuous improvement and we
            constantly look for new and better ways to serve our community - we
            owe them nothing less. When our operating environment changes, and new
            challenges emerge, we adjust our approach accordingly."
          />,
          <ValueCard
            name="Clarity"
            description="By being clear and transparent in everything Operation Code
            does, our community can trust that we will act with integrity with the
            resources we are given. In communicating, we are considerate of the
            sender and the receiver."
          />,
        ]}
      />
    </div>
  );
}

export default About;
