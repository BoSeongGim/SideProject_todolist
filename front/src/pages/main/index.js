import './main.css';
import { useState } from "react";
//import { CommonModal } from "component";
import dayjs from "dayjs"; // yarn add dayjs

dayjs.locale("jp");

function MainPage(){
    return(
    <>
        <main>
            <h1>My To Do List</h1>
                <div className="topNavigationBar">
                    <time> Today : {dayjs().format('YYYY-MM-DD')} </time>
                    <button type="button" className="addButton">
                        list Add
                    </button>
                </div>

                {/* */}
                <section className="todoList">
                    <article className="todoItem">
                        <div>
                            <p className="todoTitle"> List Title </p>
                            <time className="createdDate"> Created Date : yyyy-MM-dd </time>
                        </div>
                        <div>
                            <button type="button" className="editButton">
                                edit
                            </button>
                            <button type="button" className="deleteButton">
                                delete
                            </button>
                        </div>
                    </article>
                </section>
        </main>
    </>
    );
}

export default MainPage;