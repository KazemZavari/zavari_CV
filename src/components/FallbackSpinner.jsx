

const styles = {
  spinnerContainerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
};

const FallbackSpinner = () => {
  return (
    <div style={styles.spinnerContainerStyle}>
      please wait ...
    </div>
  );
}

export default FallbackSpinner;
