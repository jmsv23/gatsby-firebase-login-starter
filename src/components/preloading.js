import React, { useEffect } from 'react'
import bodymovin from 'bodymovin'

import styles from './preloading.module.scss'

const PreLoading = (props) => {
  const mountRef = React.createRef()
  useEffect(() => {
    var animItem = bodymovin.loadAnimation({
      wrapper: mountRef.current,
      animType: 'svg',
      loop: true,
      path: 'https://assets5.lottiefiles.com/datafiles/arIrMB5WY4Uhhgv0OuShBLzoAt9AnrzQCh9Z5wjW/spinner%20loading/data.json'
    });
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.player} ref={mountRef} />
    </div>
  )
}

export default PreLoading
