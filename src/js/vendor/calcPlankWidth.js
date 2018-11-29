const calcPlankWidth = (plankWidth) => {
    const calcPct = (plankWidth / 6000) * 100;
    return calcPct + '%'; 
}

export default calcPlankWidth;