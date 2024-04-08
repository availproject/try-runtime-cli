(function() {var type_impls = {
"cranelift_wasm":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SectionLimited%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#75\">source</a><a href=\"#impl-SectionLimited%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'a, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#86\">source</a><h4 class=\"code-header\">pub fn <a href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html#tymethod.new\" class=\"fn\">new</a>(\n    data: &amp;'a [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>],\n    offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'a, T&gt;, <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.BinaryReaderError.html\" title=\"struct cranelift_wasm::wasmparser::BinaryReaderError\">BinaryReaderError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new section reader from the provided contents.</p>\n<p>The <code>data</code> provided here is the data of the section itself that will be\nparsed. The <code>offset</code> argument is the byte offset, in the original wasm\nbinary, that the section was found. The <code>offset</code> argument is used\nfor error reporting.</p>\n<h5 id=\"errors\"><a class=\"doc-anchor\" href=\"#errors\">§</a>Errors</h5>\n<p>Returns an error if a 32-bit count couldn’t be read from the <code>data</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.count\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#97\">source</a><h4 class=\"code-header\">pub fn <a href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html#tymethod.count\" class=\"fn\">count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a></h4></section></summary><div class=\"docblock\"><p>Returns the count of total items within this section.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.original_position\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#102\">source</a><h4 class=\"code-header\">pub fn <a href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html#tymethod.original_position\" class=\"fn\">original_position</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns whether the original byte offset of this section.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.range\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#108\">source</a><h4 class=\"code-header\">pub fn <a href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html#tymethod.range\" class=\"fn\">range</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the range, as byte offsets, of this section within the original\nwasm binary.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter_with_offsets\" class=\"method\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#114-116\">source</a><h4 class=\"code-header\">pub fn <a href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html#tymethod.into_iter_with_offsets\" class=\"fn\">into_iter_with_offsets</a>(self) -&gt; <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimitedIntoIterWithOffsets.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimitedIntoIterWithOffsets\">SectionLimitedIntoIterWithOffsets</a>&lt;'a, T&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"SectionLimitedIntoIterWithOffsets&lt;&#39;a, T&gt;\">ⓘ</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"cranelift_wasm/wasmparser/trait.FromReader.html\" title=\"trait cranelift_wasm::wasmparser::FromReader\">FromReader</a>&lt;'a&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns an iterator which yields not only each item in this section but\nadditionally the offset of each item within the section.</p>\n</div></details></div></details>",0,"cranelift_wasm::wasmparser::CoreTypeSectionReader","cranelift_wasm::wasmparser::ComponentCanonicalSectionReader","cranelift_wasm::wasmparser::ComponentExportSectionReader","cranelift_wasm::wasmparser::ComponentImportSectionReader","cranelift_wasm::wasmparser::ComponentInstanceSectionReader","cranelift_wasm::wasmparser::ComponentTypeSectionReader","cranelift_wasm::wasmparser::DataSectionReader","cranelift_wasm::wasmparser::ElementSectionReader","cranelift_wasm::wasmparser::ExportSectionReader","cranelift_wasm::wasmparser::FunctionSectionReader","cranelift_wasm::wasmparser::GlobalSectionReader","cranelift_wasm::wasmparser::ImportSectionReader","cranelift_wasm::wasmparser::InstanceSectionReader","cranelift_wasm::wasmparser::MemorySectionReader","cranelift_wasm::wasmparser::TableSectionReader","cranelift_wasm::wasmparser::TagSectionReader","cranelift_wasm::wasmparser::TypeSectionReader","cranelift_wasm::wasmparser::NameMap","cranelift_wasm::wasmparser::ComponentAliasSectionReader","cranelift_wasm::wasmparser::CodeSectionReader","cranelift_wasm::wasmparser::IndirectNameMap","cranelift_wasm::wasmparser::ProducersSectionReader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoIterator-for-SectionLimited%3C'a,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#143-145\">source</a><a href=\"#impl-IntoIterator-for-SectionLimited%3C'a,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a> for <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'a, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"cranelift_wasm/wasmparser/trait.FromReader.html\" title=\"trait cranelift_wasm::wasmparser::FromReader\">FromReader</a>&lt;'a&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" class=\"associatedtype\">Item</a> = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.BinaryReaderError.html\" title=\"struct cranelift_wasm::wasmparser::BinaryReaderError\">BinaryReaderError</a>&gt;</h4></section></summary><div class='docblock'>The type of the elements being iterated over.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IntoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IntoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" class=\"associatedtype\">IntoIter</a> = <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimitedIntoIter.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimitedIntoIter\">SectionLimitedIntoIter</a>&lt;'a, T&gt;</h4></section></summary><div class='docblock'>Which kind of iterator are we turning this into?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#150\">source</a><a href=\"#method.into_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; &lt;<a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'a, T&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.IntoIter\" title=\"type core::iter::traits::collect::IntoIterator::IntoIter\">IntoIter</a></h4></section></summary><div class='docblock'>Creates an iterator from a value. <a href=\"https://doc.rust-lang.org/1.77.1/core/iter/traits/collect/trait.IntoIterator.html#tymethod.into_iter\">Read more</a></div></details></div></details>","IntoIterator","cranelift_wasm::wasmparser::CoreTypeSectionReader","cranelift_wasm::wasmparser::ComponentCanonicalSectionReader","cranelift_wasm::wasmparser::ComponentExportSectionReader","cranelift_wasm::wasmparser::ComponentImportSectionReader","cranelift_wasm::wasmparser::ComponentInstanceSectionReader","cranelift_wasm::wasmparser::ComponentTypeSectionReader","cranelift_wasm::wasmparser::DataSectionReader","cranelift_wasm::wasmparser::ElementSectionReader","cranelift_wasm::wasmparser::ExportSectionReader","cranelift_wasm::wasmparser::FunctionSectionReader","cranelift_wasm::wasmparser::GlobalSectionReader","cranelift_wasm::wasmparser::ImportSectionReader","cranelift_wasm::wasmparser::InstanceSectionReader","cranelift_wasm::wasmparser::MemorySectionReader","cranelift_wasm::wasmparser::TableSectionReader","cranelift_wasm::wasmparser::TagSectionReader","cranelift_wasm::wasmparser::TypeSectionReader","cranelift_wasm::wasmparser::NameMap","cranelift_wasm::wasmparser::ComponentAliasSectionReader","cranelift_wasm::wasmparser::CodeSectionReader","cranelift_wasm::wasmparser::IndirectNameMap","cranelift_wasm::wasmparser::ProducersSectionReader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SectionLimited%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#134\">source</a><a href=\"#impl-Debug-for-SectionLimited%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'_, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#135\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cranelift_wasm::wasmparser::CoreTypeSectionReader","cranelift_wasm::wasmparser::ComponentCanonicalSectionReader","cranelift_wasm::wasmparser::ComponentExportSectionReader","cranelift_wasm::wasmparser::ComponentImportSectionReader","cranelift_wasm::wasmparser::ComponentInstanceSectionReader","cranelift_wasm::wasmparser::ComponentTypeSectionReader","cranelift_wasm::wasmparser::DataSectionReader","cranelift_wasm::wasmparser::ElementSectionReader","cranelift_wasm::wasmparser::ExportSectionReader","cranelift_wasm::wasmparser::FunctionSectionReader","cranelift_wasm::wasmparser::GlobalSectionReader","cranelift_wasm::wasmparser::ImportSectionReader","cranelift_wasm::wasmparser::InstanceSectionReader","cranelift_wasm::wasmparser::MemorySectionReader","cranelift_wasm::wasmparser::TableSectionReader","cranelift_wasm::wasmparser::TagSectionReader","cranelift_wasm::wasmparser::TypeSectionReader","cranelift_wasm::wasmparser::NameMap","cranelift_wasm::wasmparser::ComponentAliasSectionReader","cranelift_wasm::wasmparser::CodeSectionReader","cranelift_wasm::wasmparser::IndirectNameMap","cranelift_wasm::wasmparser::ProducersSectionReader"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SectionLimited%3C'_,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#124\">source</a><a href=\"#impl-Clone-for-SectionLimited%3C'_,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'_, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/wasmparser/readers.rs.html#125\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cranelift_wasm/wasmparser/struct.SectionLimited.html\" title=\"struct cranelift_wasm::wasmparser::SectionLimited\">SectionLimited</a>&lt;'_, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cranelift_wasm::wasmparser::CoreTypeSectionReader","cranelift_wasm::wasmparser::ComponentCanonicalSectionReader","cranelift_wasm::wasmparser::ComponentExportSectionReader","cranelift_wasm::wasmparser::ComponentImportSectionReader","cranelift_wasm::wasmparser::ComponentInstanceSectionReader","cranelift_wasm::wasmparser::ComponentTypeSectionReader","cranelift_wasm::wasmparser::DataSectionReader","cranelift_wasm::wasmparser::ElementSectionReader","cranelift_wasm::wasmparser::ExportSectionReader","cranelift_wasm::wasmparser::FunctionSectionReader","cranelift_wasm::wasmparser::GlobalSectionReader","cranelift_wasm::wasmparser::ImportSectionReader","cranelift_wasm::wasmparser::InstanceSectionReader","cranelift_wasm::wasmparser::MemorySectionReader","cranelift_wasm::wasmparser::TableSectionReader","cranelift_wasm::wasmparser::TagSectionReader","cranelift_wasm::wasmparser::TypeSectionReader","cranelift_wasm::wasmparser::NameMap","cranelift_wasm::wasmparser::ComponentAliasSectionReader","cranelift_wasm::wasmparser::CodeSectionReader","cranelift_wasm::wasmparser::IndirectNameMap","cranelift_wasm::wasmparser::ProducersSectionReader"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()