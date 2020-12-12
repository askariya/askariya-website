// modified from https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);