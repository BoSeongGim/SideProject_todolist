import './main.css';

function MainPage(){
    return(
    <main>
        <h1>My To Do List</h1>
            <div className="topNavigationBar">
                <time> should print now time!! </time>
                <button type="button"> list Add </button>
            </div>

            {/* */}
            <section className="todoList">
                <article className="todoItem">
                    <div>
                        <p className="todoTitle"> List Title </p>
                        <time className="createdDate"> Created Date : yyyy-MM-dd </time>
                    </div>
                    <div>
                        <button type="button"> edit </button>
                        <button type="button"> delete </button>
                    </div>
                </article>
            </section>
    </main>
    );
}

export default MainPage;