import './main.css';
import { CommonModal } from "components";

function MainPage(){
    return(
    <>
        <main>
            <h1>My To Do List</h1>
                <div className="topNavigationBar">
                    <time> Today : yyyy.mm.dd </time>
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
        <CommonModal />
    </>
    );
}

export default MainPage;