(function() {var type_impls = {
"rocksdb":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#89-354\">source</a><a href=\"#impl-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'a, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.valid\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#123-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.valid\" class=\"fn\">valid</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the iterator is valid. An iterator is invalidated when\nit reaches the end of its defined range, or when it encounters an error.</p>\n<p>To check whether the iterator encountered an error after <code>valid</code> has\nreturned <code>false</code>, use the <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#method.status\" title=\"method rocksdb::DBRawIteratorWithThreadMode::status\"><code>status</code></a> method. <code>status</code> will never\nreturn an error when <code>valid</code> is <code>true</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.status\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#132-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.status\" class=\"fn\">status</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an error <code>Result</code> if the iterator has encountered an error\nduring operation. When an error is encountered, the iterator is\ninvalidated and <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#method.valid\" title=\"method rocksdb::DBRawIteratorWithThreadMode::valid\"><code>valid</code></a> will return <code>false</code> when called.</p>\n<p>Performing a seek will discard the current status.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_first\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#170-174\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.seek_to_first\" class=\"fn\">seek_to_first</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Seeks to the first key in the database.</p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocksdb::{DB, Options};\n\n<span class=\"kw\">let </span>path = <span class=\"string\">\"_path_for_rocksdb_storage5\"</span>;\n{\n    <span class=\"kw\">let </span>db = DB::open_default(path).unwrap();\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>iter = db.raw_iterator();\n\n    <span class=\"comment\">// Iterate all keys from the start in lexicographic order\n    </span>iter.seek_to_first();\n\n    <span class=\"kw\">while </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n        iter.next();\n    }\n\n    <span class=\"comment\">// Read just the first key\n    </span>iter.seek_to_first();\n\n    <span class=\"kw\">if </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n    } <span class=\"kw\">else </span>{\n        <span class=\"comment\">// There are no keys in the database\n    </span>}\n}\n<span class=\"kw\">let _ </span>= DB::destroy(<span class=\"kw-2\">&amp;</span>Options::default(), path);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_to_last\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#207-211\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.seek_to_last\" class=\"fn\">seek_to_last</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Seeks to the last key in the database.</p>\n<h5 id=\"examples-1\"><a class=\"doc-anchor\" href=\"#examples-1\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocksdb::{DB, Options};\n\n<span class=\"kw\">let </span>path = <span class=\"string\">\"_path_for_rocksdb_storage6\"</span>;\n{\n    <span class=\"kw\">let </span>db = DB::open_default(path).unwrap();\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>iter = db.raw_iterator();\n\n    <span class=\"comment\">// Iterate all keys from the end in reverse lexicographic order\n    </span>iter.seek_to_last();\n\n    <span class=\"kw\">while </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n        iter.prev();\n    }\n\n    <span class=\"comment\">// Read just the last key\n    </span>iter.seek_to_last();\n\n    <span class=\"kw\">if </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n    } <span class=\"kw\">else </span>{\n        <span class=\"comment\">// There are no keys in the database\n    </span>}\n}\n<span class=\"kw\">let _ </span>= DB::destroy(<span class=\"kw-2\">&amp;</span>Options::default(), path);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#239-249\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.seek\" class=\"fn\">seek</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]&gt;&gt;(&amp;mut self, key: K)</h4></section></summary><div class=\"docblock\"><p>Seeks to the specified key or the first key that lexicographically follows it.</p>\n<p>This method will attempt to seek to the specified key. If that key does not exist, it will\nfind and seek to the key that lexicographically follows it instead.</p>\n<h5 id=\"examples-2\"><a class=\"doc-anchor\" href=\"#examples-2\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocksdb::{DB, Options};\n\n<span class=\"kw\">let </span>path = <span class=\"string\">\"_path_for_rocksdb_storage7\"</span>;\n{\n    <span class=\"kw\">let </span>db = DB::open_default(path).unwrap();\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>iter = db.raw_iterator();\n\n    <span class=\"comment\">// Read the first key that starts with 'a'\n    </span>iter.seek(<span class=\"string\">b\"a\"</span>);\n\n    <span class=\"kw\">if </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n    } <span class=\"kw\">else </span>{\n        <span class=\"comment\">// There are no keys in the database\n    </span>}\n}\n<span class=\"kw\">let _ </span>= DB::destroy(<span class=\"kw-2\">&amp;</span>Options::default(), path);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seek_for_prev\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#278-288\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.seek_for_prev\" class=\"fn\">seek_for_prev</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]&gt;&gt;(&amp;mut self, key: K)</h4></section></summary><div class=\"docblock\"><p>Seeks to the specified key, or the first key that lexicographically precedes it.</p>\n<p>Like <code>.seek()</code> this method will attempt to seek to the specified key.\nThe difference with <code>.seek()</code> is that if the specified key do not exist, this method will\nseek to key that lexicographically precedes it instead.</p>\n<h5 id=\"examples-3\"><a class=\"doc-anchor\" href=\"#examples-3\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>rocksdb::{DB, Options};\n\n<span class=\"kw\">let </span>path = <span class=\"string\">\"_path_for_rocksdb_storage8\"</span>;\n{\n    <span class=\"kw\">let </span>db = DB::open_default(path).unwrap();\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>iter = db.raw_iterator();\n\n    <span class=\"comment\">// Read the last key that starts with 'a'\n    </span>iter.seek_for_prev(<span class=\"string\">b\"b\"</span>);\n\n    <span class=\"kw\">if </span>iter.valid() {\n        <span class=\"macro\">println!</span>(<span class=\"string\">\"{:?} {:?}\"</span>, iter.key(), iter.value());\n    } <span class=\"kw\">else </span>{\n        <span class=\"comment\">// There are no keys in the database\n    </span>}\n}\n<span class=\"kw\">let _ </span>= DB::destroy(<span class=\"kw-2\">&amp;</span>Options::default(), path);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.next\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#291-295\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.next\" class=\"fn\">next</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Seeks to the next key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.prev\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#298-302\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.prev\" class=\"fn\">prev</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Seeks to the previous key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.key\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#305-311\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.key\" class=\"fn\">key</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a slice of the current key.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#314-320\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.value\" class=\"fn\">value</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a slice of the current value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.item\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#323-329\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html#tymethod.item\" class=\"fn\">item</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>], &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>])&gt;</h4></section></summary><div class=\"docblock\"><p>Returns pair with slice of the current key and current value.</p>\n</div></details></div></details>",0,"rocksdb::db_iterator::DBRawIterator"],["<section id=\"impl-Sync-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#365\">source</a><a href=\"#impl-Sync-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'a, D&gt;</h3></section>","Sync","rocksdb::db_iterator::DBRawIterator"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#356-362\">source</a><a href=\"#impl-Drop-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'a, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#357-361\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.77.1/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","rocksdb::db_iterator::DBRawIterator"],["<section id=\"impl-Send-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/db_iterator.rs.html#364\">source</a><a href=\"#impl-Send-for-DBRawIteratorWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'a, D&gt;</h3></section>","Send","rocksdb::db_iterator::DBRawIterator"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()