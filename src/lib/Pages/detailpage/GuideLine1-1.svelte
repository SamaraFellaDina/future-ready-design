<script>
    import { Icon } from "$lib";
</script>
<article class="content-wrapper">
    <section>
        <h2>Tekstalternatieven</h2>
        <p>richtlijn 1.1</p>
        <Icon name ="eye" />
        <progress id="file" value="32" max="100"> 32% </progress>
    </section>
    <section>
        <details open>
            <summary>1.1.1 Niet-tekstuele content <input type="checkbox"></summary>
            <ul>
                <li>
                    <svg></svg> <h3>impact op gebruiker</h3>
                    <p></p>
                </li>
                <li>
                    <svg></svg> <h3>hoe te testen</h3>
                    <dl>
                        <dt>1</dt><dd></dd>
                        <dt>2</dt><dd></dd>
                        <dt>3</dt><dd></dd>
                        <dt>4</dt><dd></dd>
                    </dl>
                </li>
            </ul>
            <section>
                <h3>Hoe kun je dit oplossen</h3>
                <p></p>
                <p></p>
            </section>
        </details>
    </section>
</article>
<style>
    article{
        border-radius: var(--section-border-radius);
        box-shadow: var(--box-shadow);
        padding: var(--average-padding);
        background-color: var(--color-background-section);
    }
</style>