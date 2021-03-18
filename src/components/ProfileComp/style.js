import styled from 'styled-components';

export const SectionHead = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px 90px;
`

export const DivMigas = styled.div`
    display: flex;
    p {
        margin: auto 0;
    }
`
export const Div = styled.div`
    background-color: whitesmoke;
    padding: 50px;
    text-align: left;
    .header{
        display: flex;
        img {
        width: 29vw;
        border-radius: 5px;
    }
    .title {
        padding-left: 20px;
        p {
            font-size: 1.2em;
            font-weight: 400;
        }
        img {
            width: 50px;
        }
    }
    }
    .valores {
        margin-top: 50px;
        display: flex;
        h4{
            margin: 10px 0;
        }
        p {
            margin-left: 20px;
            border: 2px solid #b8daba;
            padding: 10px 25px;
            background-color: #b8daba; 
        }
    }
    .description {
        margin-top: 50px;
        display: flex;
        h4{
            margin: 15px 0;
        }
        p {
            padding: 0 200px 0 20px;
            font-size: 1.2em;
        }
    }

`
