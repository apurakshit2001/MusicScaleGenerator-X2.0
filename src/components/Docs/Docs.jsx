import React from 'react';
import './Docs.css';

const Docs = () => {
    return (
        <div className="docs-container">
            <section className="content-section">
                <h2 className="intro-heading">Introduction</h2>
                <p className="black-text">Welcome to the Musique Scale Generator! This tool allows you to generate various musical scales and chords based on a selected note. Here, you'll find documentation on how to use the tool and understand its features.</p>

                <h2 className="notes-heading">Notes and Scales</h2>
                <p className="notes-text underline-000">The musical notes available for selection are:</p>
                <ul className="notes-list square-list">
                    <li>C</li>
                    <li>C# / D♭</li>
                    <li>D</li>
                    <li>D# / E♭</li>
                    <li>E</li>
                    <li>F</li>
                    <li>F# / G♭</li>
                    <li>G</li>
                    <li>G# / A♭</li>
                    <li>A</li>
                    <li>A# / B♭</li>
                    <li>B</li>
                </ul>
                <p className="notes-text underline-000">You can choose any of these notes and generate different scales or chords based on the selected note.</p>

                <h2 className="how-to-heading black-text">How to Use</h2>
                <p className="how-to-text">Follow these steps to use the Musique Scale Generator:</p>
                <ol className="how-to-list">
                    <li>Select a note from the dropdown menu.</li>
                    <li>Click on one of the buttons to generate the desired scale or chord. The available options are:</li>
                    <ul className="how-to-sublist black-text">
                        <li>Major Scale (Ionian mode)</li>
                        <li>Natural Minor Scale (Aeolian mode)</li>
                        <li>Major Chord Notes</li>
                        <li>Minor Chord Notes</li>
                        <li>Harmonic Minor Scale</li>
                        <li>Melodic Minor Scale</li>
                        <li>Blues Scale</li>
                        <li>Dorian Mode</li>
                        <li>Phrygian Mode</li>
                        <li>Lydian Mode</li>
                        <li>Mixolydian Mode</li>
                        <li>Locrian Mode</li>
                    </ul>
                    <li>The selected scale or chord notes will be displayed on the screen.</li>
                    <li>You can reset your selection at any time by clicking the "Reset" button.</li>
                </ol>

                <h2 className="understanding-heading black-text">Understanding the Output</h2>
                <p className="understanding-text">Once a scale or chord is generated, the notes will be displayed on the screen. Here’s a brief explanation of each type:</p>
                <ul className="understanding-list black-text">
                    <li><strong>Major Scale (Ionian mode):</strong> A seven-note scale with a specific pattern of whole and half steps.</li>
                    <li><strong>Natural Minor Scale (Aeolian mode):</strong> A seven-note scale with a different pattern of whole and half steps compared to the major scale.</li>
                    <li><strong>Major Chord:</strong> A chord consisting of the root, major third, and perfect fifth.</li>
                    <li><strong>Minor Chord:</strong> A chord consisting of the root, minor third, and perfect fifth.</li>
                    <li><strong>Harmonic Minor Scale:</strong> A minor scale with a raised seventh note, creating a distinct sound.</li>
                    <li><strong>Melodic Minor Scale:</strong> A minor scale with raised sixth and seventh notes when ascending, and natural minor form when descending.</li>
                    <li><strong>Blues Scale:</strong> A six-note scale with a specific pattern used commonly in blues music.</li>
                    <li><strong>Dorian Mode:</strong> A minor-type scale with a natural sixth.</li>
                    <li><strong>Phrygian Mode:</strong> A minor-type scale with a flat second.</li>
                    <li><strong>Lydian Mode:</strong> A major-type scale with a raised fourth.</li>
                    <li><strong>Mixolydian Mode:</strong> A major-type scale with a flat seventh.</li>
                    <li><strong>Locrian Mode:</strong> A minor-type scale with a flat second and flat fifth.</li>
                </ul>
            </section>
            <div className="main-content">
                <h1 className="chord-heading">How to Create Chords</h1>
                <section className="intro-section">
                    <h2 className="intro-subheading">Introduction</h2>
                    <p className="intro-text">Chords are a combination of notes played simultaneously to create harmony. This guide will take you through the process of creating chords, from simple to complex.</p>
                </section>
                <section className="notes-section">
                    <h2 className="notes-subheading">Identifying Notes and Intervals</h2>
                    <h3 className="root-note-heading">Root Note</h3>
                    <p className="root-note-text">The root note is the foundational note of the chord, upon which the rest of the chord is built. For example, in a C major chord, C is the root note.</p>
                    <h3 className="intervals-heading">Intervals</h3>
                    <p className="intervals-text">An interval is the distance between two notes. Here are some common intervals used in chord construction:</p>
                    <ul className="intervals-list">
                        <li><strong>Major Third:</strong> An interval of four half steps (or semitones) from the root note. For example, E is the major third of C.</li>
                        <li><strong>Minor Third:</strong> An interval of three half steps from the root note. For example, Eb is the minor third of C.</li>
                        <li><strong>Perfect Fifth:</strong> An interval of seven half steps from the root note. For example, G is the perfect fifth of C.</li>
                        <li><strong>Major Seventh:</strong> An interval of eleven half steps from the root note. For example, B is the major seventh of C.</li>
                        <li><strong>Minor Seventh:</strong> An interval of ten half steps from the root note. For example, Bb is the minor seventh of C.</li>
                        <li><strong>Major Ninth:</strong> An interval of fourteen half steps from the root note. For example, D is the major ninth of C.</li>
                        <li><strong>Eleventh:</strong> An interval of seventeen half steps from the root note. For example, F is the eleventh of C.</li>
                        <li><strong>Thirteenth:</strong> An interval of twenty-one half steps from the root note. For example, A is the thirteenth of C.</li>
                    </ul>
                </section>
                <section className="basic-chords-section">
                    <h2 className="basic-chords-subheading">Basic Chords</h2>
                    <h3 className="major-chords-heading">Major Chords</h3>
                    <p className="major-chords-text">A major chord consists of three notes: the root, the major third, and the perfect fifth. For example, a C major chord includes the notes C, E, and G.</p>
                    <pre className="code-block">
                        <code>
                            C Major: C - E - G
                        </code>
                    </pre>
                    <h3 className="minor-chords-heading">Minor Chords</h3>
                    <p className="minor-chords-text">A minor chord consists of three notes: the root, the minor third, and the perfect fifth. For example, a C minor chord includes the notes C, Eb, and G.</p>
                    <pre className="code-block">
                        <code>
                            C Minor: C - Eb - G
                        </code>
                    </pre>
                </section>
                <section className="intermediate-chords-section">
                    <h2 className="intermediate-chords-subheading">Intermediate Chords</h2>
                    <h3 className="seventh-chords-heading">Seventh Chords</h3>
                    <p className="seventh-chords-text">Seventh chords add a fourth note to the basic triad. There are several types of seventh chords:</p>
                    <ul className="seventh-chords-list">
                        <li><strong>Major Seventh:</strong> Root, major third, perfect fifth, and major seventh. (e.g., Cmaj7: C - E - G - B)</li>
                        <li><strong>Minor Seventh:</strong> Root, minor third, perfect fifth, and minor seventh. (e.g., Cm7: C - Eb - G - Bb)</li>
                        <li><strong>Dominant Seventh:</strong> Root, major third, perfect fifth, and minor seventh. (e.g., C7: C - E - G - Bb)</li>
                    </ul>
                    <pre className="code-block">
                        <code>
                            C Major Seventh: C - E - G - B
                            C Minor Seventh: C - Eb - G - Bb
                            C Dominant Seventh: C - E - G - Bb
                        </code>
                    </pre>
                </section>
                <section className="advanced-chords-section">
                    <h2 className="advanced-chords-subheading">Advanced Chords</h2>
                    <h3 className="ninth-chords-heading">Ninth Chords</h3>
                    <p className="ninth-chords-text">Ninth chords add a fifth note to the seventh chord. For example:</p>
                    <ul className="ninth-chords-list">
                        <li><strong>Major Ninth:</strong> Root, major third, perfect fifth, major seventh, and major ninth. (e.g., Cmaj9: C - E - G - B - D)</li>
                        <li><strong>Minor Ninth:</strong> Root, minor third, perfect fifth, minor seventh, and major ninth. (e.g., Cm9: C - Eb - G - Bb - D)</li>
                        <li><strong>Dominant Ninth:</strong> Root, major third, perfect fifth, minor seventh, and major ninth. (e.g., C9: C - E - G - Bb - D)</li>
                    </ul>
                    <pre className="code-block">
                        <code>
                            C Major Ninth: C - E - G - B - D
                            C Minor Ninth: C - Eb - G - Bb - D
                            C Dominant Ninth: C - E - G - Bb - D
                        </code>
                    </pre>
                    <h3 className="eleventh-thirteenth-chords-heading">Eleventh and Thirteenth Chords</h3>
                    <p className="eleventh-thirteenth-chords-text">These chords build upon ninth chords by adding additional notes:</p>
                    <ul className="eleventh-thirteenth-chords-list">
                        <li><strong>Eleventh Chords:</strong> Include the eleventh note. (e.g., C11: C - E - G - Bb - D - F)</li>
                        <li><strong>Thirteenth Chords:</strong> Include the thirteenth note. (e.g., C13: C - E - G - Bb - D - F - A)</li>
                    </ul>
                    <pre className="code-block">
                        <code>
                            C Eleventh: C - E - G - Bb - D - F
                            C Thirteenth: C - E - G - Bb - D - F - A
                        </code>
                    </pre>
                </section>
            </div>
        </div>
    )
}

export default Docs