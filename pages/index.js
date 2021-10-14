import MyWonderfulComponent from '../components/MyWonderfulComponent';
import useStyles from "../styles/styles";

export default function Page({ id, options, other, str, data }) {
  const classes = useStyles();

  return (
    <MyWonderfulComponent
      id={id}
      options={options}
      other={other}
      str={str}
      data={data}
      color={classes.title}
    >
      I am text from a component
    </MyWonderfulComponent>
  );
}

Page.getInitialProps = () => {
  const id = 1,
    other = {
      count: 0,
    },
    data = "data",
    str = "Hello from SSR",
    options = {
      params: {
        fields: {
          isDynamic: true,
        },
      },
    }
  console.log(str);
  return {
    id,
    options,
    other,
    data,
    str,
  };
};
