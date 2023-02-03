import styled from "styled-components";

export const FolderCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    max-width: 20rem;
    min-height: 10rem;



    .card-header {
        width: 100%;
        height: 100%;
        display: flex;
        background-color: #b9bec5;
        align-items: center;
        justify-content: center;

        button {
            margin: 0;
            padding: 0;
            background-color: #516071;
            color: white;
            padding: 0.6rem;
            font-size: 1.4rem;
            font-weight: bold;
            border-radius: 4px;
            width: 15rem;
        }
    }

    .card-content {
        display: grid;
        grid-template-columns: 60% 40%;
        padding: 0.6rem;

        div {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1.4rem;
        gap: 0.5rem;
        text-align: start;
        width: 100%;
        }

        h3 {
            &.name {
                color: black;
                font-size: 1.2rem;
                font-weight: bold;
            }

            &.email {
                font-size: 0.8rem;
                color: grey;
            }

        }

        .card-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: white;
            align-items: center;
            gap: 1rem;
            color: grey;
            padding: 0.6rem;


            button {
                font-size: 1.3rem;
            }
        }


    }
`;
