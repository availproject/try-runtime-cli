(function() {var type_impls = {
"webpki":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#42-47\">source</a><a href=\"#impl-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"docblock\"><p>Requires the <code>alloc</code> feature.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#44-46\">source</a><h4 class=\"code-header\">pub fn <a href=\"webpki/struct.DnsName.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; <a class=\"struct\" href=\"webpki/struct.DnsNameRef.html\" title=\"struct webpki::DnsNameRef\">DnsNameRef</a>&lt;'_&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a <code>DnsNameRef</code> that refers to this <code>DnsName</code>.</p>\n</div></details></div></details>",0,"webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-PartialEq-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-Debug-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CDnsNameRef%3C'_%3E%3E-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#60-64\">source</a><a href=\"#impl-From%3CDnsNameRef%3C'_%3E%3E-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"webpki/struct.DnsNameRef.html\" title=\"struct webpki::DnsNameRef\">DnsNameRef</a>&lt;'_&gt;&gt; for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"docblock\"><p>Requires the <code>alloc</code> feature.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#61-63\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(dns_name: <a class=\"struct\" href=\"webpki/struct.DnsNameRef.html\" title=\"struct webpki::DnsNameRef\">DnsNameRef</a>&lt;'_&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<DnsNameRef<'_>>","webpki::DNSName"],["<section id=\"impl-Eq-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-Eq-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section>","Eq","webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3Cstr%3E-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#51-55\">source</a><a href=\"#impl-AsRef%3Cstr%3E-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"docblock\"><p>Requires the <code>alloc</code> feature.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#52-54\">source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.str.html\">str</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<str>","webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-Clone-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","webpki::DNSName"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-Hash-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.77.1/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","webpki::DNSName"],["<section id=\"impl-StructuralPartialEq-for-DnsName\" class=\"impl\"><a class=\"src rightside\" href=\"src/webpki/name/dns_name.rs.html#37\">source</a><a href=\"#impl-StructuralPartialEq-for-DnsName\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"webpki/struct.DnsName.html\" title=\"struct webpki::DnsName\">DnsName</a></h3></section>","StructuralPartialEq","webpki::DNSName"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()