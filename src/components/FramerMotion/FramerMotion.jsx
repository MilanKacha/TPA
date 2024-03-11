import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FramerMotion = ({ buttonChild, modalChild, setModalIsOpen }) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <div style={{ display: 'flex'  }}>
            <motion.div style={ {zIndex:999}}  onClick={() => setShowCart(!showCart)}>
                {buttonChild}
                {showCart && <motion.div style={{ width: '600px' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{modalChild}</motion.div>}
            </motion.div>
        </div>
    );
};

export default FramerMotion;

