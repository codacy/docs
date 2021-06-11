all
exclude_rule "MD013"
exclude_rule "MD044"
rule "MD003", :style => :atx
rule "MD004", :style => :dash
rule "MD007", :indent => 4
rule "MD029", :style => :one
rule "MD030", :ul_single => 3, :ol_single => 2, :ul_multi => 3, :ol_multi => 2
rule "MD033", :allowed_elements => ["a", "li"]
rule "MD035", :style => "---"
