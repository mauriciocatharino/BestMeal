package br.com.abim.bestmeal.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

import br.com.abim.bestmeal.domain.enumeration.Bandeira;

/**
 * A CartaoCredito.
 */
@Entity
@Table(name = "cartao_credito")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class CartaoCredito implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "nome_cartao", nullable = false)
    private String nomeCartao;

    @Enumerated(EnumType.STRING)
    @Column(name = "bandeira")
    private Bandeira bandeira;

    @Column(name = "numero")
    private String numero;

    @Column(name = "cvv")
    private String cvv;

    @NotNull
    @Size(min = 7, max = 7)
    @Column(name = "validade", length = 7, nullable = false)
    private String validade;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCartao() {
        return nomeCartao;
    }

    public CartaoCredito nomeCartao(String nomeCartao) {
        this.nomeCartao = nomeCartao;
        return this;
    }

    public void setNomeCartao(String nomeCartao) {
        this.nomeCartao = nomeCartao;
    }

    public Bandeira getBandeira() {
        return bandeira;
    }

    public CartaoCredito bandeira(Bandeira bandeira) {
        this.bandeira = bandeira;
        return this;
    }

    public void setBandeira(Bandeira bandeira) {
        this.bandeira = bandeira;
    }

    public String getNumero() {
        return numero;
    }

    public CartaoCredito numero(String numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCvv() {
        return cvv;
    }

    public CartaoCredito cvv(String cvv) {
        this.cvv = cvv;
        return this;
    }

    public void setCvv(String cvv) {
        this.cvv = cvv;
    }

    public String getValidade() {
        return validade;
    }

    public CartaoCredito validade(String validade) {
        this.validade = validade;
        return this;
    }

    public void setValidade(String validade) {
        this.validade = validade;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CartaoCredito)) {
            return false;
        }
        return id != null && id.equals(((CartaoCredito) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "CartaoCredito{" +
            "id=" + getId() +
            ", nomeCartao='" + getNomeCartao() + "'" +
            ", bandeira='" + getBandeira() + "'" +
            ", numero='" + getNumero() + "'" +
            ", cvv='" + getCvv() + "'" +
            ", validade='" + getValidade() + "'" +
            "}";
    }
}
