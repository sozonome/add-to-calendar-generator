import { Grid, Image, Link, useColorMode } from "@chakra-ui/react";

const Badges = () => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href="https://www.producthunt.com/posts/public-apis-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-public-apis-3"
      target="_blank"
    >
      <Image
        margin={["0 auto", "0 0 0 auto"]}
        src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=279187&theme=${colorMode}`}
        alt="Public APIs - Find a public API for your next project | Product Hunt"
        width="250"
        height="54"
      />
    </Link>
  );
};

export default Badges;
